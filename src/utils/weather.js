const request = require('request');

const weather = function(lat,lon,callback){
  const url = `http://api.weatherstack.com/current?access_key=6dd5f2eb91514e45792c7075e99ddec8&query=${lat},${lon}`;
  request({url:url,json:true},(err,res)=>{
    if(err){
      callback('Unable to connect to weather service',undefined)
    } else  {
      if(!res.body.success == undefined){
        callback('Unable to find weather for this location',undefined)
      } else {
        let currentWeather = res.body.current;
        callback(undefined,{
          description:currentWeather.weather_descriptions[0],
          temperature:currentWeather.temperature,
          precip:currentWeather.precip
        })
      }
    }
  })
}
module.exports = weather