const fs = require("fs");
const path = require("path");
const { log } = require("./logger");

const dataDir = path.join(__dirname, "../data");
// console.log("dataDir:", dataDir);

const filePath = path.join(dataDir, "optmyzr.json");
// console.log("filePath:", filePath);

const downloadCSVFilePath = path.join(dataDir, "reviews.csv");

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    log(`Error reading the File: ${err.message}`, "error");
  }

  const jsonData = JSON.parse(data);

  const csvString = jsonToCSV(jsonData);
  log(`csvstring: ${csvString}`, "success");

  fs.writeFile(downloadCSVFilePath, csvString, (err) => {
    if (err) {
      log(`Error downloading data into csv file`, "error");
    }
    {
      log(`CSV file has been saved`, "success");
    }
  });
});

function cleanTitle(title) {
  if (!title) return "";
  return title.replace(/\"/g, "");
}

function escapeCsvValue(value) {
  if (
    value &&
    (value.includes(",") || value.includes("\n") || value.includes('"'))
  ) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

function jsonToCSV(jsonData) {
  const csvRows = [];

  const headers = [
    "reviewer_name",
    "reviewer_title",
    "reviewer_company_size",
    "reviewer_company_emp_count",
    "review_title",
    "review_rating_count",
    "review_date",
    "question",
    "answer",
  ];

  csvRows.push(headers.join(","));

  jsonData.forEach((entry) => {
    const reviewer = entry.reviewer;
    const review = entry.review;

    const reviewTitle = cleanTitle(review.title);

    review.commentsData.forEach((comment) => {
      const row = [
        escapeCsvValue(reviewer.name),
        escapeCsvValue(reviewer.title),
        escapeCsvValue(reviewer.companySize),
        escapeCsvValue(reviewer.companyEmpCount),
        escapeCsvValue(reviewTitle),
        escapeCsvValue(review.rating_count),
        escapeCsvValue(review.review_date),
        escapeCsvValue(comment.question),
        escapeCsvValue(comment.answer),
      ];
      csvRows.push(row.join(","));
    });
  });

  return csvRows.join("\n");
}
