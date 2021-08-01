function success(req,resp,menssage,status=200){
    resp.status(status).json(
        {
            error:false,
            status,
            body:menssage
        }
    )
}

function error(req,resp,menssage,status=500){
    resp.status(status).json(
        {
            error:true,
            status,
            body:menssage
        }
    )
}

module.exports={success,error}