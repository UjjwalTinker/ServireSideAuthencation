const { recompileSchema } = require("./models/user");
const { getuser } = require("./services/auth");

async function ResToLogin(req,res,next){
    const Token = req.cookies.uid;
    req.user = null
    if(!Token) return next();
    const user =   getuser(Token);
    req.user = user;
    next();
}

function restrict(roles=[]){
    return function(req,res,next){
        if(!req.user) return res.redirect("/userr/login")

        if(!roles.includes(req.user.role)) return res.end("unaitherize")
            return next()
    }
}

module.exports={
    ResToLogin,
    restrict
}