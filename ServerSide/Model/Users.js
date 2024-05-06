let mongoose = require('mongoose')
let userSchema = new mongoose.Schema(
    {fname: String, lname: String, password: String, email: String}
)

let userModel = mongoose.model('users', userSchema, 'Users')
module.exports = userModel