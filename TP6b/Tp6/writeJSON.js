const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "tasksData.json");
// console.log(filePath + "\n")

function writeFile(pArray) {
    const dataWrite = JSON.stringify(pArray, null, 2)
    fs.writeFileSync(filePath, dataWrite)
}

module.exports = writeFile