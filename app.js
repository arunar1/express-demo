const express=require('express')

const server=express();

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

server.use(express.json());

// server.use((req,res,next)=>{
//     console.log("iam a middle ware ");
//     next();
// });

server.get('/',(request,response)=>{
    response.send("Get method in movies");
});

server.get('/movies',(req,res)=>{
    res.send({
        message1:'here are your movies my friend',
        data1:movies
    });
});


server.post("/movies",(req,res)=>{
    movies.push(req.body);
    res.send('we have a new movie '+ req.body.name);
});


server.delete('/movies',(req,res)=>{
    const id=req.query.id;
    console.log(id);
    const index=movies.findIndex((movie)=>movie.id===parseInt(id));
    movies.splice(index,1);
    res.send('movie deleted');
});




server.listen(4000,()=>{
    console.log("Server is running in port 4000 successfully")
});