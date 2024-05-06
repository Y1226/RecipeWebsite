let express = require('express')
let router = express.Router()
let mongoose = require('mongoose')

let bodyParser = require('body-parser')
router.use(bodyParser())

let recipeModel = require('../Model/Recipe')
let recipeActions = require('../Actions/RecipesAction')

router.get('/getAll', (req, res) => {
    recipeActions.getAll().then((rcp) => {
        res.json(rcp)
    })
})

router.get('/getByRecipeName/:name', (req, res) => {
    recipeActions.getByUserName(req.params.name).then((rcp) => {
        res.json(rcp)
    })
})

router.get('/getByUserName/:name', (req, res) => {
    recipeActions.getByUserName(req.params.userName).then((rcp) => {
        res.json(rcp)
    })
})

router.post('/addRecipe', (req, res) => {

    let recipe = new recipeModel({
        name:req.body.name,
        description:req.body.description,
        level:req.body.level,
        time:req.body.time,
        yields:req.body.yields,
        instructions:req.body.instructions,
        userName:req.body.userName,
        ingredients:req.body.ingredients
    })

    recipeActions.addRecipe(recipe).then((rcp) => {
        res.json(rcp)
    })
})

router.delete('/deleteRecipe/:name/:userName', (req, res) => {
    recipeActions.deleteRecipe(req.params.name, req.params.userName).then((rcp) => {
        res.json(rcp)
    })
})

module.exports = router