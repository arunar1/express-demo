const express =require('express')

const router=express.Router();

router.post('/',(req,res)=>{
    res.send("user created ")
})

router.get('/user-details',(req,res)=>{
    res.send("user details");
})

module.exports =router;