const request = require('request');

const geocode = function(address,callback){
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoic2h1YmhhbTIwIiwiYSI6ImNrOTBkc2sxajAwbmszcHFtdjNpYXBndjYifQ.2Z5JPm1WDhVTNyQJlfptJA`;
  request({url:url,json:true},(err,res)=>{
    if(err){
      console.log(err)
      callback('Unable to connect to location service',undefined)
    } else  {
      if(res.body.features.length === 0){
        callback('Unable to find this location please try again',undefined)
      } else {
        callback(undefined,{
          latitude:res.body.features[0].center[1],
          longitude:res.body.features[0].center[0],
          location:res.body.features[0].place_name
        })
      }
    }
  })
}
module.exports = geocode