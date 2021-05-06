const path= require('path');
const express = require("express");
const helmet = require("helmet");
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(helmet());

app.set('view engine','ejs');
app.set('views',path.join(__dirname,"views"))

app.get('/load',(req,res)=>{
    res.render("index",{
        msg:"Hello World!"
    })
});

app.listen(4000,()=>{
    console.log("Listening on Port 4000...");
})