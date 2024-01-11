const secretkey = 'sdhrsn2003';
import jwt from "jsonwebtoken";

const authenticate = (request,response,next)=>{
    const token = request.header('Authorization');
    if(!token){
        return response.status(401).json({error: "Unauthorized - No token"});
    }
    try{
        const decoded = jwt.verify(token,secretkey);
        request.user = decoded.user;
        next();
    }catch(error){
        console.error(error);
        return response.status(401).json({error:"Unauthorized - Invalid token"});
    }
};

export default authenticate;