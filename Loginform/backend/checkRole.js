const checkRole = (requiredRoles)=>{
    return (request,response,next)=>{
        const userRoles = request.roles;
        const hasRequiredRole = requiredRoles.some(role=>userRoles.includes(role));
        if(!hasRequiredRole){
            return response.status(403).json({error:" Forbidden "});
        }
        next();
    }
}
export default checkRole;