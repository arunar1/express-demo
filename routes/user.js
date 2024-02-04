const express =require('express')

const router=express.Router();

router.post('/',(req,res)=>{
    res.send("user created ")
})

router.get('/user-details/:id',(req,res)=>{
    res.send("user details " + req.params.id);
})

router.get('/userspecific:key([a-zA-Z]{5})',(req,res)=>{
    res.send("The specific result"+req.params.key)
})
module.exports =router; 