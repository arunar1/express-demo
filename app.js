const express=require('express')
const product=require('./routes/product')
const user=require('./routes/user')
const app=express();

var mongoose=require('mongoose')

var dbURL=require('./properties').DB_URL
 
mongoose.connect(dbURL)

mongoose.connection.on("connected",()=>{
    console.log("Connected to mongodb")
})




app.use('/product',product)
app.use('/user',user)




app.listen(7000,()=>{
    console.log("Server is running in port 7000 successfully")
});