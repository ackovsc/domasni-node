const fs = require("fs");

const readFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

const writeFile = (fileName, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
};


const appendFile = (fileName, data) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(fileName, data, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
};

module.exports = {
  readFile,
  writeFile,
  appendFile, 
};