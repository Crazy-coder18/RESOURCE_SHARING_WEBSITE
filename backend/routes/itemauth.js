const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Item = require("../models/Item"); 
const fetchuser = require("../middleware/fetchuser");

// Route to add a new item
router.post("/additem", fetchuser,[
    body("name", "Name must be at least 3 characters").isLength({ min: 3 }),
    body("itemcategory", "itemcategory must be at least 3 characters").isLength({ min: 3 }),
    body("imageitem", "image must be at least 3 characters").isLength({ min: 3 }),
    body("description", "description must be at least 3 characters").isLength({ min: 3 }),
    body("email", "Name must be at least 3 characters").isEmail(),
    body("personname", "personname must be at least 3 characters").isLength({ min: 3 }),
    body("contact", "contact must be at least 3 characters").isLength({ min: 10,max:10}),
    body("address", "address must be at least 3 characters").isLength({ min: 10}),
    
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { name, itemcategory, imageitem, description, email, personname, contact, address } = req.body;

        const newItem = new Item({
            name,
            itemcategory,
            imageitem,
            description,
            email,
            personname,
            contact,
            address,
            user: req.user.id 
        });
        const savedItem = await newItem.save();
        res.json(savedItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/fetchitems", async (req, res) => {
    try {
        const items = await Item.find({});
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/fetchuseritems",fetchuser,async(req,res)=>{
    const userid=req.user.id;
    try{
        const items=await Item.find({user:userid});
        res.json(items);
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
})
router.delete(`/deleteitem/:id/`, fetchuser, async (req, res) => {
    try {
        let item = await Item.findById(req.params.id);
        if (!item) { return res.status(404).send("Not Found") }

        if (item.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        item = await Item.findByIdAndDelete(req.params.id)
        res.json({ "Success": "item has been deleted", item: item });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;
