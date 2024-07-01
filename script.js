$(document).ready(function() {
    // Function to get weather data
    function getWeather() {
        var city = $('#city-input').val();
        var apiKey = '12a9ab5586aa731d42e59c2e80ebc6c5'; // Replace with your OpenWeatherMap API key
        var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;


        $.ajax({
            url: url,
            type: 'GET',
            success: function(data) {
            var weatherData = 'City: ' + data.name + '<br>' +
                      'Temperature: ' + Math.round(data.main.temp - 273.15) + '°C<br>' +
                      'Feels Like: ' + Math.round(data.main.feels_like - 273.15) + '°C<br>' +
                      'Humidity: ' + data.main.humidity + '%<br>' +
                      'Pressure: ' + (data.main.pressure / 1000).toFixed(2) + ' bar<br>' +
                      'Visibility: ' + (data.visibility / 1000).toFixed(2) + ' km<br>' +
                      'Wind Speed: ' + (data.wind.speed * 3.6).toFixed(2) + ' km/h<br>' +
                      'Wind Direction: ' + data.wind.deg + '°<br>' +
                      'Description: ' + data.weather[0].description;
                $('#weather-result').html(weatherData);
                $('#weather-result').addClass('visible'); 
            },
        });
    }

    
    $('#get-weather-btn').click(getWeather);

    
    $('#city-input').keypress(function(event) {
        if (event.which == 13) { 
            getWeather();
        }
    });

    
    $('#toggle-dark-mode').click(function() {
        $('body').toggleClass('dark-mode');
    });

    
    $('#clear-weather-btn').click(function() {
        $('#city-input').val('');
        $('#weather-result').html('');
        $('#weather-result').removeClass('visible'); 
    });

});
