const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b0111da89572b7e5c3784c009d9ad4e1&query=' + latitude + ',' + longitude

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service')
        }
        else if (body.error) {
            callback('Unable to find location')
        }
        else {
            callback(undefined, body.current.weather_descriptions[0] +'. It is currently ' +  body.current.temperature + ' degrees, it feels like ' + body.current.feelslike + ' degrees')
        
        }
    })    
}

module.exports = forecast