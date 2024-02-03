const express= require('express')

var router=express.Router();

// /product

router.get('/',(req,res)=>{
    console.log('welcome product')
    res.send("Get Request for product")
});

// /product/product-details

router.get('/product-details',(req,res)=>{
    res.send("Get product details");
})

module.exports =router;