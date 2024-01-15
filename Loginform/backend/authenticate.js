
import jwt from "jsonwebtoken";

const authenticate = (request,response,next)=>{
    const token = request.header('Authorization');
    if(!token){
        return response.status(401).json({error: "Unauthorized - No token"});
    }
    try{
        const decoded = jwt.verify(token,'your_secret_key');
        request.username = decoded.username;
        request.roles = decoded.roles;
        next();
    }catch(error){
        console.error(error);
        return response.status(401).json({error:"Unauthorized - Invalid token"});
    }
};

export default authenticate;