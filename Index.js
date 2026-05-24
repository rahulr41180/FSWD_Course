
const reportLayoutData1 = {
  Info_1: {
    titleOne: '',
  },
  // CategoryHeading_1: {
  //   startAsNewPage: true,
  //   headingTitle: 'Key Performance Metrics'
  // },
  KeyPerformanceIndicator_1: {
    type: 'table',
    startAsNewPage: true,
  },
  PerformanceComparison_1: {
    startAsNewPage: true,
    usedDateRangeInSelectionTwo: 'DR1',
  },
  CategoryHeading_2: {
    startAsNewPage: true,
    headingTitle: 'Peformance by Devices'
  },
  SegmentDistribution_1: {
    startAsNewPage: true,
    forWhichSegment: 'devices',
  },
  SegmentDistribution_2: {
    startAsNewPage: false,
    forWhichSegment: 'devices',
  },
  PerformanceBySegment_1: {
    startAsNewPage: false,
    sortOrder: 'desc'
  },
  CategoryHeading_3: {
    startAsNewPage: true,
    headingTitle: 'Performance By Networks'
  },
  SegmentDistribution_3: {
    startAsNewPage: false,
    segmentOptions: ['network', 'devices', 'campaign', 'adGroups'],
  },
  SegmentDistribution_4: {
    startAsNewPage: false,
    segmentOptions: ['network', 'devices', 'campaign', 'adGroups'],
  },
  PerformanceBySegment_2: {
    startAsNewPage: false,
    sortOrder: 'desc'
  },
  CategoryHeading_4: {
    startAsNewPage: true,
    headingTitle: 'Performance By Age Demographics'
  },
  PerformanceByDemographics_1: {
    startAsNewPage: false,
    sortOrder: 'desc'
  },
  MetricTrendComparisonForDemographics_1: {
    startAsNewPage: false,
    segmentOptions: ['age', 'gender'],
  },
  CategoryHeading_5: {
    startAsNewPage: true,
    headingTitle: 'Performance By Gender Demographics'
  },
  PerformanceByDemographics_2: {
    startAsNewPage: false,
    sortOrder: 'desc'
  },
  MetricTrendComparisonForDemographics_2: {
    startAsNewPage: false,
    segmentOptions: ['age', 'gender'],
  },
  CategoryHeading_6: {
    startAsNewPage: true,
    headingTitle: 'Peformance of Metrics'
  },
  PerformanceByTimePeriod_1: {
    toShowCompareData: true,
    usedCompareDateRange: 'CDR1',
  },
  PerformanceTrendByTimePeriod_1: {
    startAsNewPage: false,
    byTimePeriod: 'none',
  },
  CategoryHeading_7: {
    startAsNewPage: true,
    headingTitle: 'Spend Pattern'
  },
  SpendPatternByTimePeriod_1: {
    startAsNewPage: false,
    byTimePeriod: 'none',
  },
  SpendPatternTrendByTimePeriod_1: {
    startAsNewPage: false,
    pageTitle: 'Performance Trend by Time Period',
  },
  CategoryHeading_8: {
    startAsNewPage: true,
    headingTitle: 'Conversion Pyramid'
  },
  ConversionPyramidTrend_1: {
    type: 'charts',
    startAsNewPage: false,
  },
  CategoryHeading_9: {
    startAsNewPage: true,
    headingTitle: 'Top Performers by Segments'
  },
  TopPerformers_1: {
    startAsNewPage: false,
    topPerformersOptions: ['keywords', 'product_&_listing_groups', 'calls', 'textAds', 'imageAds', 'videoAds', 'campaigns', 'adGroups', 'searchTerms', 'urls', 'placements', 'sitelink'],
  },
  TopPerformers_2: {
    startAsNewPage: false,
    topPerformersOptions: ['keywords', 'product_&_listing_groups', 'calls', 'textAds', 'imageAds', 'videoAds', 'campaigns', 'adGroups', 'searchTerms', 'urls', 'placements', 'sitelink'],
  },
  TopPerformers_3: {
    startAsNewPage: false,
    topPerformersOptions: ['keywords', 'product_&_listing_groups', 'calls', 'textAds', 'imageAds', 'videoAds', 'campaigns', 'adGroups', 'searchTerms', 'urls', 'placements', 'sitelink'],
  },
  TopPerformers_4: {
    startAsNewPage: false,
    topPerformersOptions: ['keywords', 'product_&_listing_groups', 'calls', 'textAds', 'imageAds', 'videoAds', 'campaigns', 'adGroups', 'searchTerms', 'urls', 'placements', 'sitelink'],
  },
  TopPerformers_5: {
    startAsNewPage: false,
    topPerformersOptions: ['keywords', 'product_&_listing_groups', 'calls', 'textAds', 'imageAds', 'videoAds', 'campaigns', 'adGroups', 'searchTerms', 'urls', 'placements', 'sitelink'],
  },
  TopPerformers_6: {
    startAsNewPage: false,
    topPerformersOptions: ['keywords', 'product_&_listing_groups', 'calls', 'textAds', 'imageAds', 'videoAds', 'campaigns', 'adGroups', 'searchTerms', 'urls', 'placements', 'sitelink'],
  },
  TopPerformers_7: {
    startAsNewPage: true,
    topPerformersOptions: ['keywords', 'product_&_listing_groups', 'calls', 'textAds', 'imageAds', 'videoAds', 'campaigns', 'adGroups', 'searchTerms', 'urls', 'placements', 'sitelink'],
  },
  AccountSummary_1: {
    heading: "Account Summary",
    previousStartDate: "",
    previousEndDate: "",
    adsWinsHeading: "",
    adsWinSavedContent: ``,
    adsChallengesHeading: "",
    adsChallengesSavedContent: ``,
  },
}

let seperatedSection = [];
let sectionPayload = {}
for (const key in reportLayoutData1) {
  if (key === "Info_1" || key === "AccountSummary_1") {
    if (Object.keys(sectionPayload).length) {
      seperatedSection.push(sectionPayload)
    }
    sectionPayload = {};
    sectionPayload[key] = reportLayoutData1[key];
    seperatedSection.push(sectionPayload)
    sectionPayload = {};
  }
  else if (reportLayoutData1[key].startAsNewPage) {
    if (Object.keys(sectionPayload).length) {
      seperatedSection.push(sectionPayload)
    }
    sectionPayload = {};
    sectionPayload[key] = reportLayoutData1[key];
  } else {
    sectionPayload[key] = reportLayoutData1[key];
  }
}

if(Object.keys(sectionPayload).length) {
  seperatedSection.push(sectionPayload);
}
console.log('seperatedSection:', seperatedSection)

/*
It’s been an absolute privilege to work with Ashwani, and I’m happy to share my thoughts about his leadership and vision.

I have had the opportunity to work with Ashwani and can confidently say that he is a highly driven, visionary, and forward-thinking leader. He consistently provides clear guidance and strategic direction, helping teams stay aligned with long-term business goals while maintaining a strong focus on quality and timely delivery.

One of the most inspiring things I have learned from Ashwani is his constant drive for innovation. He strongly believes in building meaningful and impactful products that contribute to the growth of our organization as well as our country. His vision aligns deeply with the idea of “Make in India”, and he is always motivated to create innovative, homegrown solutions.

Ashwani continuously explores new ideas and encourages the development of original products that can support and empower different organizations. He has a strong passion for building innovative solutions across multiple domains, including AI, Web Applications, Mobile Applications, SaaS platforms, CRM systems, and other scalable digital products. His long-term dream is to create globally recognized, powerful products, and he actively works toward turning that vision into reality.

Under his guidance and visionary leadership, teams receive clarity, motivation, and the confidence to innovate. His focus on sustainable growth, innovation, and long-term value creation has played a significant role in shaping both individual careers and the overall progress of the organization.

I truly appreciate his leadership, vision, and continuous encouragement, and I highly recommend Ashwani as an exceptional leader, mentor, and visionary company owner whose strategic guidance, entrepreneurial spirit, and dedication drive the company’s growth and inspire teams to achieve excellence.

Thanks & Regards,
Rahul Rathor
*/