const path= require('path');
const express = require("express");
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const validateUser = (req,res,next) =>{
    console.log("Validate User");
    next();
}

app.use(validateUser);

app.get('/',validateUser,(req , res)=>{
    res.send("<h1>Home</h1>");
});

app.post('/users',(req , res)=>{
   res.send(req.body.userName);
});
app.listen(4000,()=>{
    console.log("Listening on Port 4000...");
})