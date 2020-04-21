//this function will show the map on screen when the webpage is loaded
function getMap(){
    var map = new Microsoft.Maps.Map('#myMap');
}


//this function will fetch the weather
function weatherBalloon(cityID) {
    
    //requests the weather through the url with the city-id and the api key
    fetch('https://api.openweathermap.org/data/2.5/weather?id=2747373&appid=3a7778352b3856da02c39d11d85d4fc1')  
    
    //converts the data to a json format
    .then(function(resp) 
        { return resp.json()
        })

    //this will make the weather appear on screen
    .then(function(data){
        drawWeather(data);
    })

    //incase of errors they'll be caught here
    .catch(function() {
    });
  }

//this function will place the weather elements at the right places in the html tag
function drawWeather( d ) {

    //the weather is given in kelvin so this calculation will turn it into celcius
    var celcius = Math.round(parseFloat(d.main.temp)-273.15);
    
    //this will place the weather information in the right places in the html code
    document.getElementById('description').innerHTML = d.weather[0].description;
    document.getElementById('temperature').innerHTML = celcius + '&deg;';
    document.getElementById('location').innerHTML = d.name;
}

//here the map and weather function will be loaded when the webpage loads
window.onload = function(){
      weatherBalloon(2747373);
      getMap();
}



