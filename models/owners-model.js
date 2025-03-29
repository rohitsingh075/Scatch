const mongoose= require("mongoose");


const ownerSchema=mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    products:{
        type:Array,
        default:[]
    },
    contact:Number,
    picture:String,
    gstin:String
})

module.exports=monogoose.model("user",ownerSchema);