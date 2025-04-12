const express=require('express');
const router=express.Router();
const ownerModel=require("../models/owners-model");

if(process.env.NODE_ENV=="development"){
    // console.log(process.env.NODE_ENV);
    router.post("/create",async function(req,res){
        let owners= await ownerModel.find();
        // console.log("hello");
        if(owners.length>0){
            return res
            .status(404)
            .send("You dont have permissions to create a new owner");
        }

        let {fullname,email,password}=req.body;

        let createdOwner= await ownerModel.create({
            fullname,
            email,
            password,
            
        })
            res.send(createdOwner);
    });
}



router.get("/admin",function(req,res){
    res.render("createproducts",{ success: req.flash('success') || [] });
});




module.exports=router;