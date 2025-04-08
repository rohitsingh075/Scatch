const jwt=require("jsonwebtoken");
const userModel= require("../models/user-model");

module.exports=async function(req,res,next){
    if(!req.cookie.token){
        req.flash("error","you need to login first");
        return res.redirect("/");
    }

    try{
        let decode= jwt.verify(req.cookie.token,process.env.JWT_KEY);
        let user=await userModel
            .findOne({email:decoded.email})
            .select("-password");
        req.user=user;
        next();
    } catch(err){
        req.flash("error","something went wrong.");
        res.redirect("/");
    }

};