const express =require('express')

const router=express.Router();


//middle ware

router.use('/',(req,res,next)=>{
    console.log("API call received");
    next()
})

router.post('/',(req,res)=>{
    res.send("user created ")
})

router.get('/user-details/:id',(req,res)=>{
    res.send("user details " + req.params.id);
})

router.get('/userspecific/:key([a-zA-Z]{5})',(req,res)=>{
    res.send("The specific result "+req.params.key)
})


router.get('*',(req,res)=>{
    const errorobj={
        errorcode:'404',
        response:"invalid  url"
    }
    res.send(JSON.stringify(errorobj))
})
module.exports =router; 