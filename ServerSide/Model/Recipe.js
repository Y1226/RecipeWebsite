let mongoose = require('mongoose')

const l = {
    easy: 1,
    medium: 2,
    hard: 3
}

let recipeSchema = new mongoose.Schema(
    {name:String, description:String, level:String, time:String, yields:String, instructions:[], userName:String, ingredients:[]}
)

let recipeModel = mongoose.model('recipes', recipeSchema, 'Recipes')
module.exports = recipeModel