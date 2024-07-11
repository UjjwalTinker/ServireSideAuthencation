    const jwt = require("jsonwebtoken");
    const Secretkey = "Drummer";
  

  
      

 function setuser(user){
    return jwt.sign({
        id:user.id,
        email:user.email,
        role:user.role,
        password:user.password,

    },Secretkey)
}


 function getuser(token){
    if(!token) return null
    try{
        return jwt.verify(token,Secretkey)
    }catch(error){
        return null;
    }
}

module.exports={
    setuser,
    getuser
}