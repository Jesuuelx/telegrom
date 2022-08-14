const express = require("express");

const router = express.Router();

const response = require("../../network/response")

const controller = require('./controller')

router.post('/', (req, res) => {

    controller.addUser(req.body.name)
    .then(data => {
        response.success(req, res, data, 201)
    }).catch( err => {
        response.error(req, res, 'error interno', 500, err)
    });


});

router.get('/', (req, res) => {


    controller.getUsers()
    .then( list => {
        response.success(req, res, list, 200)
    }).catch( err => {
        response.error(req, res, 'error interno', 500, err)
    })

})

module.exports = router;
