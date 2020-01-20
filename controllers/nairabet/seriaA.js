const axios = require('axios');

class SeriaA{
    static async getSeriaABets(req, res){
        const URL = "https://www.nairabetshop.com/rest/market/categories/multi/9731/events";
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
    getSeriaABets : SeriaA.getSeriaABets
};