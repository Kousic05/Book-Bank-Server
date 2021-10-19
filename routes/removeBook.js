const express = require('express');
const router = express.Router();
const Userpost = require('../models/User.js');
const Bookpost = require('../models/Bookcol');

router.patch('/:username',async (req,res)=>{
    // update user doc of username with book field as null
    try{
        const userpost = await Userpost.updateOne({username: req.params.username},{$set:{
            book_id: null
        }});
        res.json(userpost);
    }catch (err){
        res.json({message: err});
    }    
});

module.exports = router;