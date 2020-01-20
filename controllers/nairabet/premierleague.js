const axios = require('axios');

class PremierLeague{
    static async getPremierLeagueBets(req, res){
        const URL = "https://www.nairabetshop.com/rest/market/categories/multi/9872/events";
        axios.get(URL)
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
}

module.exports = {
    getPremierLeagueBets : PremierLeague.getPremierLeagueBets
};