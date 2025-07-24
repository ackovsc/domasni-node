const express = require("express");
const {
  getAllRecipes,
  addRecipe,
  deleteRecipe,
  editRecipe,
} = require("./handlers/recipes");

const app = express();

app.use(express.json());

app.get("/recipes", getAllRecipes);
app.post("/recipes", addRecipe);
app.delete("/recipes/:id", deleteRecipe);
app.put("/recipes/:id", editRecipe);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started at port ${port}!`);
});