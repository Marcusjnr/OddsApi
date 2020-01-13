const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Hello From Docker")
});

app.listen(3000, function(){
   console.log("app is listening on 3000")
});