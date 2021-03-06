const mongoose = require("mongoose");

const premierLeagueSchema = new mongoose.Schema({
    market:[{
        date: {
            type: String,
            lowercase: true,
        },

        time:{
            type: String,
            lowercase:true
        },

        event:{
            type: String,
            lowercase:true
        },
        odds: [{
            1:{
                type: String
            },
            2:{
                type:String
            },
            12:{
                type:String
            },
            X:{
                type:String
            },
            oneX:{
              type:String
            },
            X2:{
                type:String
            },
            0.25:{
                type:String
            },
            U25:{
                type:String
            },
            GG:{
                type:String
            },
            NG:{
                type:String
            },
            oneHalfTime:{

            },
            twoHalfTime:{
                type:String
            },
            XHT:{
                type:String
            }
        }]
    }]
});

const premierLeagueBet9ja = mongoose.model("PremierLeagueBet9ja", premierLeagueSchema);
module.exports =  premierLeagueBet9ja;