
const store = require('./store')

const addMessage = (user, message, chat) => {
  console.log(user, message);

  return new Promise((resolve, reject) => {
    if (!user || !message || !chat) {
      console.error("[controller, Message]");
      reject("Uno de los campos es invalido");
    } else {
      const fullMessage = {
       chat:chat,
        user: user,
        message: message,
        date: new Date(),
      };

      store.add(fullMessage);
      resolve(fullMessage);
    }
  });


};


const getMessage = ( filterChat ) => {
    return new Promise(( resolve, reject ) => {
        resolve(store.list(filterChat))
    })
}

const updateMessage = (id, message) => {
    return new Promise ( async( resolve, reject ) =>{
        if ( !id || !message ) {
            reject('Data invalida')
        }

        const newUpdate = await store.updateText(id, message);

        resolve(newUpdate)
    })
}

const deleteMessage = ( id ) => {
  return new Promise ( (resolve, reject) => {
        if ( !id ){
          reject(`No existe ese ${id}`)
        }

      store.remove(id).then((data) => {
        if ( data.deletedCount === 0 ){
          reject('id invalido')
        }
        resolve()
      }).catch( e => reject(e))
  })
}

module.exports = {
  addMessage,
  getMessage,
  updateMessage,
  deleteMessage
};
