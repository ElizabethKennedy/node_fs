const fs = require("fs");
const path = require("path");

fs.appendFile(
  path.join(__dirname, "HelloWorld.txt"),
  "\nMy additional text for the purposes of this exercise",
  (err) => {
    if (err) console.error(err);
  }
);
