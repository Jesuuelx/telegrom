const db = require("mongoose");

const uri = `mongodb+srv://db_user_jesuuelx:bbIOccV4IJbGDCsl@cluster0.g2hnh.mongodb.net/test`;

db.Promise = global.Promise;


    const connect = async( uri ) => {

        
      await  db.connect(uri, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          dbName: "telegrom",
        });


        console.log("DB Connect success");

    }

module.exports = connect;