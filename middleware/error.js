const ErrorResponse = require('../utils/errorResponse')
const errorHandler = (err,req,res,next)=>{
    let error = {...err}

    error.message = err.message;

    // Log to console for dev 
    console.log(err.stack.red);


    // Mongoose bad Object
    if(err.name === "CastError"){
        const message = `Resource not found with id of ${req.params.id}`;
        error = new ErrorResponse(message,404)
    }

    // Mongo duplicate key error
    if(err.code === 1100){
        const message =  'Duplicate field value entered'
        error = new ErrorResponse(message,400)
    }

    // Mongo validation error
    if (err.name === "ValidationError"){
        const message = Object.values(err.errors).map(val => val.message);
        error = new ErrorResponse(message,400)
    }

    res.status(error.statusCode || 500).json({
        success:false,
        error: error.message || 'Server Error'
    });
}

module.exports = errorHandler