const ErrorResponse = require('../utils/errorResponse')
const errorHandler = (err,req,res,next)=>{
    let error = {...err}

    error.message = err.message;

    // Log to console for dev 
    console.log(err.name)

    // Mongoose bad Object
    if(err.name === "CastError"){
        const message = `Resource not found with id of ${req.params.id}`;
        console.log(req.params)
        error = new ErrorResponse(message,404)
        res.status(404).json({error:message})
    }

    // Mongo duplicate key error
    if(err.code === 11000){
        const message =  'User already exists'
        error = new ErrorResponse(message,400)
        res.status(400).json({error:message})
    }

    if(err.kind === 'ObjectId'){
        const message = 'There is no profile for this user'
        error = new ErrorResponse(message,500)
        res.status(500).json({error:message})
    }

    // Mongo validation error
    if (err.name === "ValidationError"){
        const message = Object.values(err.errors).map(val => val.message);
        error = new ErrorResponse(message,400)
        res.status(400).json({error:message})
    }

    // Reference Error
    if(err.name === "ReferenceError" ){
        const message = `We encountered a ${err.name}`;
        console.log(err.message.red)
        error = new ErrorResponse(message,500)
        res.status(500).json({error:message})
    }
}

module.exports = errorHandler