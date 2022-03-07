const express = require('express');
const app = express();
const port = '4000';

app.use(logger);
app.get('/books',(req,res)=>{
    res.json({route:"/books"});
});

app.get('/libraries',(req,res)=>{
    res.json({route:"/libraries",permission:true});
});

app.get('/authors',(req,res)=>{
    res.json({route:'/authors',permission:true});
});

function logger(req,res,next){
    console.log(req.originalUrl);
    next();
}
app.listen(port,()=>{console.log(`listening on ${port}`)});


