const express = require('express');
const app = express();
const port = '4000';

app.use(logger);
app.get('/books',(req,res)=>{
    res.json({route:"/books"});
});

app.get('/libraries',checkPermission('librarian'),(req,res)=>{
    res.json({route:"/libraries",permission: req.permission});
});

app.get('/authors',checkPermission('author'),(req,res)=>{
    res.json({route:'/authors',permission: req.permission});
});

function logger(req,res,next){
    console.log(req.originalUrl);
    next();
}

function checkPermission(data){
    return (req,res,next) => {
        if(req.originalUrl === '/libraries' || req.originalUrl === '/authors'){
            req.permission = true;
            // console.log(data);
        }
        next();
    }
}
app.listen(port,()=>{console.log(`listening on ${port}`)});


