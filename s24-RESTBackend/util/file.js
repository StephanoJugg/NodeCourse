const path = require("path");
const fs = require("fs");

const clearImage = (filePath) => {
  filePathCorrect = path.join(__dirname, "..", filePath);
  console.log(filePathCorrect);
  fs.unlink(filePathCorrect, (err) => console.log(err));
};

exports.clearImage = clearImage;
