
const { readFile, writeFile, appendFile } = require("./read-write");

const FILE_NAME = "domasna-data.txt";

const runZadaca = async () => {
  try {
   
    await writeFile(FILE_NAME, "Aleksandar Momchilov");
   
    const read1 = await readFile(FILE_NAME);
    console.log("1. " + read1 + " -> read 1");

    await appendFile(FILE_NAME, ", 16 year");
   
    const read2 = await readFile(FILE_NAME);
    console.log("2. " + read2 + " -> read 2");

    await appendFile(FILE_NAME, ", from skopje");
   
    const read3 = await readFile(FILE_NAME);
    console.log("3. " + read3 + " -> read 3");

  } catch (err) {
    
    console.log("Настана грешка:", err);
  }
};


runZadaca();