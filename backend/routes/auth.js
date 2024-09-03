const User=require("../models/User");
const express=require("express");
const router=express.Router();
router.post("/",(req,res)=>{
    const user=User(req.body)
    user.save()
        .then(savedUser => res.json(savedUser)) 
        .catch(err => res.status(500).json({ error: err.message }));
})

module.exports=router;