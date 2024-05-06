const userModel = require("../Model/Users");

const usrFuncs = {
    getAll: async function getAll() {
        const Users = await userModel.find({})
        return Users
    },
    getByUserNameAndPassword: async function getByUserNameAndPassword(e, pass) {
        const Users = await userModel.find({email: e, password: pass})
        return Users[0]
    },
    addUser: async function addUser(user) {
        const Users = await user.save()
        return Users
    },
    deleteUser: async function deleteUser(email) {
        const User = await userModel.deleteOne({email:email})
        return User
    }
}
module.exports = usrFuncs

