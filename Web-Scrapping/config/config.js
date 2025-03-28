require("dotenv").config();

module.exports = {
  // websiteUrl: "https://www.g2.com/products/trueclicks-trueclicks/reviews",
  websiteUrl: "https://www.g2.com/products/optmyzr/reviews",
  loginUrl: "https://www.g2.com/identities/start_login",
  selectors: {
    username: "#auth_key",
    password: "#password_input",
    loginButton: "input[name='commit']",
    items: ".paper.paper--white.paper--box",
    reviewerName: "a.link--header-color",
    // reviewer object will have these property
    reviewerTitle:
      ".paper.paper--white.paper--box div:nth-child(1) .paper__hd.paper__hd--bordered div:nth-child(1) div:nth-child(1) div:nth-child(1) .c-midnight-80 div:nth-child(1)",

    companySize:
      ".paper.paper--white.paper--box div:nth-child(1) .paper__hd.paper__hd--bordered div:nth-child(1) div:nth-child(1) div:nth-child(1) .c-midnight-80 div:nth-child(2) span:nth-child(1)",
    companyEmpCount:
      ".paper.paper--white.paper--box div:nth-child(1) .paper__hd.paper__hd--bordered div:nth-child(1) div:nth-child(1) div:nth-child(1) .c-midnight-80 div:nth-child(2) span:nth-child(2)",
    // review object will have these property
    reviewTitle:
      ".paper.paper--white.paper--box div:nth-child(1) .paper__bd div:nth-child(2) div:nth-child(1) div:nth-child(1) a div:nth-child(1)",
    reviewRating:
    ".paper.paper--white.paper--box div:nth-child(1) .paper__bd div:nth-child(1) div:nth-child(1) div",
    reviewDate:
    ".paper.paper--white.paper--box div:nth-child(1) .paper__bd div:nth-child(1) div:nth-child(1) .time-stamp span:nth-child(1) .x-current-review-date time",

    //   loadMoreDataProperty object will also have these field
    comments: "div[itemprop='reviewBody']",

    // these are action
    showMoreButton: "a.x-show-more",
    nextPage: "ul[aria-label='Pagination']",
    userAvatar: ".user-avatar",
  },
  credentials: {
    username: process.env.SCRAPER_USERNAME,
    password: process.env.SCRAPER_PASSWORD,
  },
  settings: {
    headless: false,
    slowMo: 100,
    timeout: 30000,
  },
};
