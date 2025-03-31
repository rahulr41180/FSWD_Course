const { chromium } = require("playwright");
const config = require("../config/config");
const { log } = require("../utils/logger");
const { saveToJSON, saveToCSV } = require("../utils/fileHandler");
const { loginAndSaveSession } = require("./login");

async function scrapeWebsite() {
  let browser;
  // Without Login start
  let page;
  // Without Login end
  try {
    browser = await chromium.connectOverCDP("http://localhost:9222");

    // Get the first available page
    const contexts = browser.contexts();
    const page = contexts[0].pages()[0] || (await contexts[0].newPage());

    log(`Using existing browser page: ${page.url()}`);

    // If needed, navigate to your target URL
    if (!page.url().includes(config.websiteUrl)) {
      await page.goto(config.websiteUrl, { waitUntil: "domcontentloaded" });
    }

    /* Without login start */
    // browser = await chromium.launch(config.settings);
    // page = await browser.newPage();
    /* Without login end */

    // const { browser: loggedInBrowser, page } = await loginAndSaveSession();
    // browser = loggedInBrowser;

    // log(`Navigating to target page: ${config.websiteUrl}`);
    // await page.goto(config.websiteUrl, { waitUntil: "networkidle" });

    // await handleCaptcha(page);

    const allData = await scrapeAllPages(page);

    // allData?.forEach((item) => {
    //   console.log("------------------");
    //   console.log(item);
    //   console.log("------------------");
    // });

    // saveToCSV(allData);

    log(
      `Successfully scraped ${
        allData.length
        // + loadMoreData.length + paginatedData.length
      } items`
    );
  } catch (error) {
    log(`Scraping failed: ${error.message}`, "error");
  } finally {
    if (browser) await browser.close();
  }
}

async function handleCaptcha(page) {
  try {
    const captchaExists = await page
      .waitForSelector("#captcha__frame", {
        timeout: 10000,
        state: "attached",
      })
      .then(() => true)
      .catch(() => false);

    if (captchaExists) {
      log(
        "CAPTCHA detected - please solve it manually in the browser window..."
      );

      await page.waitForFunction(
        () => {
          const captchaFrame = document.getElementById("captcha__frame");
          if (!captchaFrame) return true;

          const style = window.getComputedStyle(captchaFrame);
          return (
            style.display === "none" ||
            style.visibility === "hidden" ||
            captchaFrame.offsetParent === null
          );
        },
        { timeout: 300000 }
      );

      log("CAPTCHA solved, continuing with scraping...");
    } else {
      log("No CAPTCHA detected, proceeding directly...");
    }
  } catch (error) {
    log(`CAPTCHA handling error: ${error.message}`, "error");
    throw error;
  }
}

async function handleLoadMore(page) {
  let loadMoreExists = true;
  let safetyCounter = 0;
  const maxClicks = 20;
  const loadMoreData = [];

  log('Checking for "Load More" buttons...');

  while (loadMoreExists && safetyCounter < maxClicks) {
    loadMoreExists = await page.evaluate((selector) => {
      const loadMoreBtn = document.querySelector(selector);
      if (loadMoreBtn && !loadMoreBtn.disabled) {
        loadMoreBtn.click();
        return true;
      }
      return false;
    }, config.selectors.showMoreButton);

    if (loadMoreExists) {
      await page.waitForTimeout(2000);
      await page.waitForLoadState("networkidle");

      // Extract newly loaded data
      const newData = await extractCommentsData(page);
      loadMoreData.push(...newData);

      safetyCounter++;
      log(
        `Clicked "Load More" (${safetyCounter}/${maxClicks}), got ${newData.length} new items`
      );
    }
  }

  return loadMoreData;
}

async function handlePagination(page) {
  const paginatedData = [];
  let hasNextPage = true;
  let currentPage = 1;
  const maxPages = 50;

  log("Starting pagination scraping...");

  while (hasNextPage && currentPage <= maxPages) {
    log(`Scraping page ${currentPage}`);

    const pageData = await extractPageData(page);
    paginatedData.push(...pageData);

    hasNextPage = await page.evaluate((selector) => {
      const nextPageLink = document.querySelector(selector);
      if (nextPageLink && !nextPageLink.disabled) {
        nextPageLink.click();
        return true;
      }
      return false;
    }, config.selectors.nextPage);

    if (hasNextPage) {
      await page.waitForTimeout(3000);
      await page.waitForLoadState("networkidle");
      currentPage++;
    }
  }

  return paginatedData;
}

async function scrapeAllPages(page) {
  const allReviews = [];
  let currentPage = 1;
  const maxPages = 50;

  while (currentPage <= maxPages) {
    const pageReviews = await extractPageData(page);
    saveToJSON(pageReviews);
    allReviews.push(...pageReviews);
    console.log(
      `Scraped ${pageReviews.length} reviews from page ${currentPage}`
    );

    try {
      const hasNextPage = await page.evaluate(() => {
        const uls = document.querySelectorAll("ul[aria-label='Pagination']");
        console.log("uls:", uls);
        for (const ul of uls) {
          const lis = ul.querySelectorAll("li");
          if (lis.length >= 2) {
            const secondLastLi = lis[lis.length - 2];
            const aTag = secondLastLi.querySelector("a");
            if (aTag) {
              return true;
            }
          }
        }
        return false;
      });

      if (!hasNextPage) {
        console.log(
          "No more pages available (last second li with a tag not found)"
        );
        break;
      }

      await page.evaluate(() => {
        const uls = document.querySelectorAll("ul[aria-label='Pagination']");
        console.log("uls:", uls);
        for (const ul of uls) {
          const lis = ul.querySelectorAll("li");
          if (lis.length >= 2) {
            const secondLastLi = lis[lis.length - 2];
            const aTag = secondLastLi.querySelector("a");
            if (aTag) {
              setTimeout(() => {
                aTag.click();
              }, 5000);
              return;
            }
          }
        }
      });

      // await page.waitForFunction(
      //   (itemsSelector) => {
      //     const items = document.querySelectorAll(itemsSelector);
      //     return items.length > 0;
      //   },
      //   { timeout: 10000 },
      //   config.selectors.items
      // );

      await page.waitForNavigation({ waitUntil: "domcontentloaded" });

      currentPage++;
    } catch (error) {
      console.log("Pagination error:", error.message);
      break;
    }
  }

  return allReviews;
}

async function extractPageData(page) {
  return await page.$$eval(
    config.selectors.items,
    async (cards, selectors) => {
      const clickShowMore = async (card) => {
        const showMoreBtn = card.querySelector(selectors.showMoreButton);
        if (showMoreBtn && !showMoreBtn.disabled) {
          showMoreBtn.click();
          await new Promise((resolve) => setTimeout(resolve, 1000));
          return true;
        }
        return false;
      };

      const processCard = async (card) => {
        await clickShowMore(card);

        const getText = (selector, parent = card) =>
          parent.querySelector(selector)?.innerText.trim() || null;

        const commentsData = [];
        const reviewBody = card.querySelector(selectors.comments);

        if (reviewBody) {
          const questionBlocks = reviewBody.querySelectorAll("div > div");

          questionBlocks.forEach((block) => {
            const questionElem = block.querySelector(".l5");
            const answerElem = block.querySelector("p.formatted-text");

            if (questionElem && answerElem) {
              const question = questionElem.textContent.trim();
              let answer = answerElem.textContent.trim();

              answer = answer
                .replace(/Review collected by and hosted on G2\.com\.?/i, "")
                .trim();

              commentsData.push({ question, answer });
            }
          });
        }

        return {
          reviewer: {
            name: getText(selectors.reviewerName),
            title: getText(selectors.reviewerTitle),
            companySize: getText(selectors.companySize),
            companyEmpCount: getText(selectors.companyEmpCount),
          },
          review: {
            title: getText(selectors.reviewTitle),
            commentsData,
          },
        };
      };

      return await Promise.all(Array.from(cards).map(processCard));
    },
    config.selectors
  );
}

async function extractCommentsData(page) {
  return await page.$$eval(
    config.selectors.items,
    (cards, selectors) => {
      return cards.map((card) => {
        const getText = (selector, parent = card) =>
          parent.querySelector(selector)?.innerText.trim() || null;

        return {
          reviewer: {
            name: getText(selectors.reviewerName),
            title: getText(selectors.reviewerTitle),
            companySize: getText(selectors.companySize),
            companyEmpCount: getText(selectors.companyEmpCount),
          },
          reviewHeadline: {
            title: getText(selectors.reviewTitle),
          },
          //   loadMoreDataProperty: {
          //     loadedAt: new Date().toISOString(),
          //   },
        };
      });
    },
    config.selectors
  );
}

scrapeWebsite();
