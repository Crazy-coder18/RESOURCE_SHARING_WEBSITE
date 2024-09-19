const User = require("../models/User");
const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

const jwtsecret = "viratkohli";

router.post("/createuser",
    [
        body("name", "Name must be at least 5 characters").isLength({ min: 5 }),
        body("email", "Invalid email").isEmail(),
        body("password", "Password must be at least 5 characters").isLength({ min: 5 })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        let success = false;
        if (!errors.isEmpty()) {
            return res.status(400).json({ success, errors: errors.array() });
        }
        try {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ success, message: "Email already exists" });
            }

            let salt = await bcrypt.genSalt(10);
            let secPass = await bcrypt.hash(req.body.password, salt);

            user = await User.create({
                name: req.body.name,
                password: secPass,
                email: req.body.email,
            });

            const data = {
                user: {
                    id: user.id
                }
            };
            const authtoken = jwt.sign(data, jwtsecret);

            success = true;
            res.json({ success, authtoken });
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error occurred");
        }
    });

router.post("/login", [
    body("email", "name must be altleas5 5 characters").isEmail(),
    body("password", "password must be altleas5 5 characters").isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success, errors: errors.array() });
        }
        const comparepass = await bcrypt.compare(password, user.password);
        if (!comparepass) {
            return res.status(400).json({ success, errors: errors.array() });
        }
        
        const data = {
            user: {
                id: user.id
            }
        };
        const authtoken = jwt.sign(data, jwtsecret);

        success = true;
        res.json({ success, authtoken });
    }
    catch (error) {

        console.error(error.message);
        res.status(500).send("internal server error occured");
    }

})
router.get("/fetchuser",fetchuser, async (req,res)=>{
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
      } catch (error) {
        res.status(500).send("internal server error occured")
    
      }
})

module.exports = router;