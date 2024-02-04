const express =require('express')

const router=express.Router();

router.post('/',(req,res)=>{
    res.send("user created ")
})

router.get('/user-details/:id',(req,res)=>{
    res.send("user details " + req.params.id);
})

module.exports =router;