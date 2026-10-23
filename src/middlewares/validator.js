

const validate= (schema)=>(req, res, next)=>{
    try{
        schema.parse(req.body);
        next();
    }catch(error){

        res.send(error.message)
    }

}

export default validate;