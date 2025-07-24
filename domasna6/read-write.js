const fs = require("fs");

const read = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("data.json", "utf-8", (err, data) => {
      if (err) reject(err);
      data = JSON.parse(data);
      resolve(data);
    });
  });
};

const write = (data) => {
  return new Promise((resolve, reject) => {
    data = JSON.stringify(data, null, 2);

    fs.writeFile("data.json", data, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
};

module.exports = {
  read,
  write,
};