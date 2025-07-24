const fs = require("fs");

const read = (fileName) => {
  return new Promise((resolve, reject) => {
   
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) {
        return reject(err);
      }

      const jsonData = JSON.parse(data);
      resolve(jsonData);
    });
  });
};

const write = (fileName, data) => {
  return new Promise((resolve, reject) => {
    const jsonData = JSON.stringify(data, null, 2); 

    fs.writeFile(fileName, jsonData, (err) => {
      if (err) {
        return reject(err);
      }

      resolve();
    });
  });
};


module.exports = {
  read,
  write,
};