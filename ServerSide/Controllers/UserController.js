let express = require('express')
let router = express.Router()
let mongoose = require('mongoose')

let bodyParser = require('body-parser')
router.use(bodyParser())

let userModel = require('../Model/Users')
let userActions = require('../Actions/UserActions')

router.get('/getAll', (req, res) => {
    userActions.getAll().then((usr) => {
        res.json(usr)
    })
})

router.get('/getByUserNameAndPassword/:email/:pass', (req, res) => {
    userActions.getByUserNameAndPassword(req.params.email, req.params.pass).then((usr) => {
        res.json(usr)
    })
})

router.post('/addUser', (req, res) => {
    debugger
    let user = new userModel({fname: req.body.fname, lname: req.body.lname, password: req.body.password, email: req.body.email})

    userActions.addUser(user).then((usr) => {
        debugger
        res.json(usr)
    })
})

router.delete('/deleteUser/:email', (req, res) => {
    userActions.deleteUser(req.params.email).then((usr) => {
        res.json(usr)
    })
})

module.exports = router
