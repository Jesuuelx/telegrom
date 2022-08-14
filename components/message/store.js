const Model = require("./model");

const addMessage = (message) => {
  /*     list.push(message) */

  const myMsg = new Model(message);
  myMsg.save();
};

const getMessage = async(filterChat) => {
  return new Promise((resolve, reject) => {
    let filter = {};

    if (filterChat !== null) {
      filter.chat = new RegExp(filterChat, "i"); // filtrar el usuario sin importar mayus y minus
    }

    const messages = Model.find(filter)
      .populate("user")
      .populate({
        path: 'chat',
        populate: {
          path: 'users',
        },
      })
      .exec((error, populated) => {
        if (error) {
          reject(error);
        }
        resolve(populated);
      });
  });
};

const updateText = async (id, text) => {
  const foundMessage = await Model.findOne({ _id: id });

  foundMessage.message = text;
  return foundMessage.save();
};

const removeMessage = async (id) => {
  return await Model.deleteOne({ _id: id });
};

module.exports = {
  add: addMessage,
  list: getMessage,
  updateText: updateText,
  remove: removeMessage,
};
