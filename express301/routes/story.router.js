const express = require("express");
let router = express.Router();

router.get('/:storyId',(req,res,next)=>{
    const storyId = req.params.storyId;
    res.send(`<h1>Story ${storyId}</h1>`)
});

module.exports = router;