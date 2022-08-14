exports.success = (req, res, msg, status) => {
    
    
    let respuesta = {
        error:'',
        body:msg,
    }
    
    res.status(status || 200).send(respuesta);
}

exports.error = (req, res, msg, status, details) => {
    console.error('response error ' + details)
        let respuestaErr = {
            error:msg,
            body:'No Trae',
        }

        res.status( status || 500 ).send(respuestaErr)
}