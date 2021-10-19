const express = require('express');
const router = express.Router();
const Userpost = require('../models/User.js');

router.get('/',(req,res)=>{
    res.send("Register page");
});

router.post('/',async (req,res)=>{
    const post = new Userpost({
        username: req.body.username,
        password: req.body.password 
    });
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message: err})
    }
});

module.exports = router;