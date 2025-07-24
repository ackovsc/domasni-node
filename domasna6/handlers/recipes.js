const { read, write } = require("../read-write.js");

const getAllRecipes = async (req, res) => {
  try {
    const data = await read();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send("server error");
  }
};

const addRecipe = async (req, res) => {
  try {
    const recipes = await read();
    console.log(recipes)
    recipes.push(req.body);
    await write(recipes);
    res.status(201).send("nov recept e dodaden!");
  } catch (err) {
    console.log(err);
    
    res.status(500).send("server error");
  }
};

const deleteRecipe = async (req, res) => {
  try {
    let recipes = await read();
    const recipeId = Number(req.params.id);

    if (!recipes[recipeId]) {
      return res.status(404).send("ne e najden receptot");
    }

    recipes = recipes.filter((recipe, index) => recipeId !== index);
    await write(recipes);
    res.status(200).send(`receptot- ${recipeId} e izbrisan!`);
  } catch (err) {
    res.status(500).send(" Server Error");
  }
};

const editRecipe = async (req, res) => {
  try {
    let recipes = await read();
    const recipeId = Number(req.params.id);

    if (!recipes[recipeId]) {
      return res.status(404).send("receptot ne e najden!");
    }
    
    recipes = recipes.map((recipe, index) => {
      if (index === recipeId) {
        return {
          ...recipe,
          ...req.body,
        };
      }
      return recipe;
    });
    await write(recipes);

    res.status(200).send(`Recipe with index - ${recipeId} has been edited!`);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getAllRecipes,
  addRecipe,
  deleteRecipe,
  editRecipe,
};