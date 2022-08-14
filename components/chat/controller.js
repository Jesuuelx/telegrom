const store = require("./store");

const addChat = (users) => {
  return new Promise((resolve, reject) => {
    if (!users || !Array.isArray(users)) {
      console.log("[controller Error} Parece que no hay usuarios suficientes");
      reject("No se puede crear el chat");
    }

    const chat = {
      users: users,
    };

    store.add(chat);
    resolve(store.add(chat));
  });
};

const getChats = (userId) => {
  return new Promise((resolve, reject) => {
    resolve(store.get(userId));
  });
};

module.exports = {
  addChat,
  getChats,
};
