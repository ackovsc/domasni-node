const fs = require("fs");


const parseTemplate = async (template, data = null) => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      `${__dirname}/../views/${template}.html`,
      "utf-8",
      (err, content) => {
        if (err) return reject(err);

        if (data) {
          for (const key in data) {
            content = content.replace(`{{${key}}}`, data[key]);
          }
        }
        resolve(content);
      }
    );
  });
};


const getAnaliza = async (req, res) => {
  try {
    const output = await parseTemplate("analiza-form");
    res.status(200).send(output);
  } catch (err) {
    res.status(500).send(" Server Error!");
  }
};


const postAnaliza = async (req, res) => {
  try {
    const tekst = req.body.tekst_za_analiza;
    if (!tekst) {
      return res.status(400).send("Не е внесен текст.");
    }

   
    const zborovi = tekst.trim().split(/\s+/);
    const samoglaski = ["а", "о", "у", "и", "е"];

    const analiza = {
      vkupnoKarakteri: tekst.length,
      vkupnoZborovi: zborovi.length,
    
      brojRecenici: tekst.split(/[.!?]/).filter((r) => r.trim() !== "").length,
      zboroviPomaliOd5: zborovi.filter((z) => z.length < 5).length,
      zboroviPogolemiOd5: zborovi.filter((z) => z.length > 5).length,
      zboroviEdnakviNa5: zborovi.filter((z) => z.length === 5).length,
      zboroviNaSamoglaska: zborovi.filter(
        (z) => z.length > 0 && samoglaski.includes(z[0].toLowerCase())
      ).length,
    };

    
    const output = await parseTemplate("analiza-rezultat", analiza);
    res.status(200).send(output);
  } catch (err) {
    console.log(err);
    res.status(500).send("l Server Error!");
  }
};

module.exports = {
  getAnaliza,
  postAnaliza,
};