const express = require("express");

const app = express();

const db = require('./db');

// const router = require('./components/message/network') 

const router = require('./network/routes')
db(`mongodb+srv://db_user_jesuuelx:bbIOccV4IJbGDCsl@cluster0.g2hnh.mongodb.net/test`);

app.use(express.json());
app.use(express.urlencoded({extended:false}))


// app.use(router);

router(app);




app.use('/app', express.static('public'))

/* app.use('/', (req, res) => {
    res.send('Hola')
}) */

app.listen(3000);
console.log("LocalHost is Active! http://localhost:3000/");
