const Model = require("./model");

const addChat = (users) => {
  const chat = new Model(users);

  return chat.save();
};

const getChats = (filterChat) => {
  return new Promise((resolve, reject) => {
    let filter = {};

    if (filterChat !== null) {
      filter.chat = new RegExp(filterChat, "i"); // filtrar el usuario sin importar mayus y minus
    }

   Model.find(filter)
      .populate('users')
      .exec((error, populated) => {
        if (error) {
          reject(error);
        }
        resolve(populated);
      });
  });
};

module.exports = {
  add: addChat,
  get: getChats,
};
