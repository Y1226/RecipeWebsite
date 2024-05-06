const recipeModel = require("../Model/Recipe");

const recipeFuncs = {
    getAll: async function getAll() {
        const Recipes = await recipeModel.find()
        return Recipes
    },
    getByRecipeName: async function getByRecipeName(f) {
        const Recipes = await recipeModel.find({name: f})
        return Recipes
    },
    getByUserName: async function getByUserName(f) {
        const Recipes = await recipeModel.find({userName: f})
        return Recipes
    },
    addRecipe: async function addRecipe(recipe) {
        const Recipes = await recipe.save()
        return Recipes
    },
    deleteRecipe: async function deleteRecipe(name, userName) {
        const user = await recipeModel.find({name:name, userName:userName})
        if(user != null){
            const Recipe = await recipeModel.deleteOne({name:name, userName:userName})
            return Recipe
        }
        return null
    }
}
module.exports = recipeFuncs

