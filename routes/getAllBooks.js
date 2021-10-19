const express = require('express');
const router = express.Router();
const Bookpost = require('../models/Bookcol');

router.get('/',async(req,res)=>{
    // get all book docs from books collection and send it as res
    try{
        const bookpost = await Bookpost.find();
        res.json(bookpost);
    }catch (err){
        res.json({message: err});
    }
});

module.exports = router;