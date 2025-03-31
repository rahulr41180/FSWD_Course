const fs = require("fs");
const path = require("path");
const { log } = require("./logger");

const dataDir = path.join(__dirname, "../data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}
function saveToJSON(data, filename = "output.json") {
  try {
    const filePath = path.join(dataDir, filename);

    // Check if the file exists
    if (fs.existsSync(filePath)) {
      // Read the current data in the file
      const currentData = fs.readFileSync(filePath, "utf-8");

      // If the file is empty, initialize currentData as an empty array
      const parsedData = currentData.trim() ? JSON.parse(currentData) : [];

      // Merge the current data with the new data
      const updatedData = [...parsedData, ...data];

      // Write the updated data back to the file
      fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
      log(`Data saved to ${filename}`, "success");
    } else {
      // If the file doesn't exist, create a new one with the provided data
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      log(`File ${filename} created and data saved`, "success");
    }

    return true;
  } catch (error) {
    log(`Failed to save JSON: ${error.message}`, "error");
    return false;
  }
}

function saveToCSV(data, filename = "output.csv") {
  try {
    const filePath = path.join(dataDir, filename);

    if (data.length === 0) {
      log("No data to save as CSV", "warn");
      return false;
    }

    const headers = Object.keys(data[0]).join(",");

    const rows = data
      .map((obj) =>
        Object.values(obj)
          .map((value) => `"${String(value).replace(/"/g, '""')}"`)
          .join(",")
      )
      .join("\n");

    fs.writeFileSync(filePath, `${headers}\n${rows}`);
    log(`Data saved to ${filename}`, "success");
    return true;
  } catch (error) {
    log(`Failed to save CSV: ${error.message}`, "error");
    return false;
  }
}

module.exports = { saveToJSON, saveToCSV };
