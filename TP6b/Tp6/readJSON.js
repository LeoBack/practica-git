const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "tasksData.json");
// console.log(filePath + "\n")
const data = fs.readFileSync(filePath, "utf8");
const dataParsed = JSON.parse(data);

function readFile() {
  return dataParsed;
}

module.exports = readFile;