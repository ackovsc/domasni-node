const express = require("express");
const { getAnaliza, postAnaliza } = require("./controllers/analiza");

const app = express();

app.use(express.urlencoded({ extended: true }));


app.get("/analiza", getAnaliza);
app.post("/analiza", postAnaliza);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started at port ${port}!`);
});