const express = require("express");

const router = express.Router();

const response = require("../../network/response");

const multer = require("multer");

const controller = require("./controller");

const upload = multer({
  dest: "uploads/",
});

router.get("/", (req, res) => {
  /*     console.log(req.headers)
    res.header({
        "custom-header":"Mi Custom header"
    }) */

  const filterMessage = req.query.chat || null;
  controller
    .getMessage(filterMessage)
    .then((list) => {
      response.success(req, res, list, 200);
    })
    .catch((e) => {
      response.error(req, res, "Error Inesperado", 500, e);
    });
});

router.post("/", (req, res) => {
  controller
    .addMessage(req.body.chat, req.body.user, req.body.message)
    .then((fullMsg) => {
      response.success(req, res, fullMsg, 201);
    })
    .catch((err) => {
      response.error(req, res, " ERROR INESPERADO ", 400, "Error Simulado");
    });
  /* res.send(`Mensaje Entregado por ${req.body.text}`);  */
  /*     if ( req.query.error == 'ok'){

        response.error(req, res, 'ERROR SIMULADO ', 400);
        console.log(req.body)

    }else {
        response.success(req, res, ' MENSAJE ENVIADO ', 201);
    }
     */
});

router.patch("/:id", (req, res) => {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, "Error Interno", 500, err);
    });
});

router.delete("/:id", (req, res) => {
  controller
    .deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, `Usuario ${req.params.id} Eliminado`, 200);
    })
    .catch((err) => {
      response.error(req, res, "Error", 500, err);
    });
});

module.exports = router;
