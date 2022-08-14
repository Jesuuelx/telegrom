const store = require('./store');

const addUser = ( name ) => {

    return new Promise( (resolve, reject ) => {
        
        if ( !name ) {

            reject('No existe el usuario')

        }
        
        
        const user = {
            name,
        }

            store.add(user)
            resolve(user)


    })

}

const getUsers = () => {

    return new Promise( (resolve, reject) => {

        resolve(store.get());


    })


}

module.exports = {
    addUser,
    getUsers,
}