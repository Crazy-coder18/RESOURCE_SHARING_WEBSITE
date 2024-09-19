const jwt=require("jsonwebtoken")

const jwtsecret = "viratkohli";
const fetchuser=(req,res,next)=>{
    const token=req.header("auth-token");
    if (!token) {
        res.status(401).send({ error: "access denied please authenticate using valid token" });
    }
    try {
        const data = jwt.verify(token, jwtsecret);
        req.user = data.user;
        next();
    } catch (error) {
        console.log('hello world');
        res.status(401).send({ error: "access denied please authenticate using valid token" });
    }
}

module.exports = fetchuser;