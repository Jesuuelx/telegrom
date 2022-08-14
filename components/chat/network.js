const express = require("express");

const router = express.Router();

const response = require("../../network/response");

const controller = require('./controller');


router.get('/:userId', (req, res) => {
   
    controller.getChats(req.params.userId)
    .then( list => {
        response.success(req, res, list, 200)
    }).catch(err => {
        response.error(req, res, 'error inesperado', 500, err)
    })


});

router.post('/', (req, res) => {
    controller.addChat(req.body.users)
    .then(chat => {
        response.success(req, res, chat, 201)
    }).catch( err => {
        response.error(req, res, 'error', 500, err)
    }) 
})


module.exports = router;