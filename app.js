const express=require('express')
const product=require('./routes/product')


const app=express();

 

app.use('/product',product)

app.post('/create-user',(req,res)=>{
    res.send("Create user")
})




const movies=[
    {
        id:1,
        name:"Avengers",
        year:2001,
        rating:9.0
    },
    {
        id:2,
        name:"thor",
        year:2004,
        rating:9.1
    }
]

app.get('/',(request,response)=>{
    response.send("Get method in movies");
});

app.get('/movies',(req,res)=>{
    res.send({
        message1:'here are your movies my friend',
        data1:movies
    });
});


app.post("/movies",(req,res)=>{
    movies.push(req.body);
    res.send('we have a new movie '+ req.body.name);
});


app.delete('/movies',(req,res)=>{
    const id=req.query.id;
    console.log(id);
    const index=movies.findIndex((movie)=>movie.id===parseInt(id));
    movies.splice(index,1);
    res.send('movie deleted');
});



app.listen(7000,()=>{
    console.log("Server is running in port 7000 successfully")
});