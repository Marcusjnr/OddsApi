const axios = require('axios');

class Laliga{
    static async getLaLigaBets(req, res){
        const URL = "https://www.nairabetshop.com/rest/market/categories/multi/9652/events";
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
  getLaLigaBets : Laliga.getLaLigaBets
};