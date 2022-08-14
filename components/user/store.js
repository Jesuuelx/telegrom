const Model = require("./model");

const addUser = ( user ) => {

    const name = new Model( user );
    const myUser = name.save();

    return myUser;


}

const getUsers = async() => {


const users = await Model.find();

return users;


}

module.exports = {
    add:addUser,
    get:getUsers,
}