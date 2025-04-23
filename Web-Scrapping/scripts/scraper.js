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
      `Successfully scraped ${allData.length
      // + loadMoreData.length + paginatedData.length
      } items`
    );
  } catch (error) {
    log(`Scraping failed: ${error.message}`, "error");
  } finally {
    if (browser) await browser.close();
  }
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
            const aTag = secondLastLi.querySelector("a.pagination__named-link");
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

      console.log(`Waiting for 20 seconds before clicking next page...`);
      await new Promise((resolve) => setTimeout(resolve, 20000));

      await page.evaluate(() => {
        const uls = document.querySelectorAll("ul[aria-label='Pagination']");
        console.log("uls:", uls);
        for (const ul of uls) {
          const lis = ul.querySelectorAll("li");
          if (lis.length >= 2) {
            const secondLastLi = lis[lis.length - 2];
            const aTag = secondLastLi.querySelector("a.pagination__named-link");
            if (aTag) {
              aTag.click();
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

        const ratingDiv = card.querySelector(selectors.reviewRating);
        let ratingCount = null;

        if (ratingDiv) {
          const ratingClass = Array.from(ratingDiv.classList).find((cls) =>
            cls.startsWith("stars-")
          );
          ratingCount = ratingClass || null;
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
            rating_count: ratingCount,
            review_date: getText(selectors.reviewDate),
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
