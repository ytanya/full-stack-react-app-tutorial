const request = require('request-promise');

const API_KEY = 'd7df3090d5302c7d8b1b3d4184f926fc';

class Weather{
    static retrieveByCity (city, callback){
        request({
            uri:`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`,
            json: true
        }).then (function(res){
            callback(res);
        }).catch(function(err){
            console.log(err);
            callback({error:'Could not reach OpenWeatherMap API'});
        });
    }
}

module.exports= Weather;