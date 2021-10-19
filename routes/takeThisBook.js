const express = require('express');
const router = express.Router();
const Userpost = require('../models/User.js');

router.get('/:username/:bookId',async (req,res)=>{
    // check if bookId is in book field of any user doc
    // If yes, return err res(book not available)
    // Else, find user doc of username, and update book field as bookId
    // then return user doc as res
    try{
        const userpost = await Userpost.findOne({book_id: `${req.params.bookId}` });
        // if (userpost) {
        //    if ((userpost.book_id != req.params.bookId)) {
        //        const updatepost = await Userpost.updateOne({username: req.params.username},{$set:{book_id: `${req.params.bookId}`}});
        //        res.json(updatepost);
        //    } 
        // }
        if ((userpost == null)) {
            const updatepost = await Userpost.updateOne({username: req.params.username},{$set:{book_id: `${req.params.bookId}`}});
            res.json(updatepost);
         } else {
            res.sendStatus(405);
        }
    }catch(err){
        res.json({message: err});
    }    
});

module.exports = router;