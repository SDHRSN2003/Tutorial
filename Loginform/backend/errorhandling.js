import customError from "./customError";
const errorhandling = (error, request, response, next) =>{
    console.error(error.stack);

    if(error instanceof customError){
        return response.status(error.statusCode).json({error:error.message});
    }

    response.status(500).json({error:"Internal Server Error"});
};
export default errorhandling;