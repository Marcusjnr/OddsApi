const express = require("express");
const app = express();
const nairaBetLaligaRouter = require('./routes/nairabet/laLiga');
const nairaBetPremierLeagueRouter = require('./routes/nairabet/premierleague');
const nairaBetSeriaARouter = require('./routes/nairabet/seriaA');

app.get("/", function(req, res){
    res.send("Hello From Docke")
});
app.use(express.json());
app.use(nairaBetLaligaRouter);
app.use(nairaBetPremierLeagueRouter);
app.use(nairaBetSeriaARouter);

app.listen(3000, function(){
   console.log("app is listening on 3000")
});