const express=require("express");
const router=express.Router();

const ItemSchema=require("../models/Item");

router.post("/",(req,res)=>{
    const item=ItemSchema(req.body);
    item.save()
    .then(savedUser => res.json(savedUser)) 
    .catch(err => res.status(500).json({ error: err.message }));
})

module.exports=router;