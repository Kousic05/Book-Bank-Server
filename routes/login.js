const express = require('express');
const router = express.Router();
const Userpost = require('../models/User.js');

router.get('/',(req,res)=>{
    res.send("Login page");
});

router.get('/:postName', async (req,res)=>{
    try{
        const getLog = await Userpost.find({username : `${req.params.postName}`});
        res.json(getLog);
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;