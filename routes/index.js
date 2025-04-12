const express = require("express");
const isLoggedIn = require("../middlewares/isLoggedIn");
const router = express.Router();
const ownerModel= require("../models/owners-model")
const productModel=require("../models/product-model")

router.get("/",function(req,res){
    let error=req.flash("error");
    res.render("index",{error});
});

router.get("/shop", isLoggedIn, async function(req, res) {
    try {
        // Assuming ownerModel contains products
        const products = await productModel.find({});
        console.log(products);
        res.render("shop", { products: products });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error retrieving products");
    }
});

module.exports=router;

