let express = require('express')
let app = express()

let body = require('body-parser')
app.use(body())

let cors = require('cors')
app.use(cors())

let mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/Recipes_Project')

let users = require('./Controllers/UserController')
app.use('/users', users)

let recipes = require('./Controllers/RecipeController')
app.use('/recipes', recipes)

app.listen(8520, () => {
    console.log("Started");
})