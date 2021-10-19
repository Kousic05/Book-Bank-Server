const express = require('express');
const router = express.Router();
const Userpost = require('../models/User.js');
const Bookpost = require('../models/Bookcol');

router.get('/:bookId',async (req,res)=>{
    // find book doc with bookid and send it as res
    try{
        const bookpost = await Bookpost.find({book_id : `${req.params.bookId}`});
        res.json(bookpost);
    }catch (err){
        res.json({message: err});
    }    
});

module.exports = router;