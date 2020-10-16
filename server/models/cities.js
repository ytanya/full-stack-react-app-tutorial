const db = require('../database');

class cities{
    static retrieveAll (callback){
        db.query('SELECT city_name FROM cities', function(err, res){
            if(err.error)
                return callback(err);
            callback(res);
        });
    }

    static insert(city, callback){
        db.query('INSERT INTO cities (city_name) VALUES ($1)', [city], function(err, res){
            if(err.error)
                return callback(err);
            callback(res);
        });       
    }
}

module.exports = cities;