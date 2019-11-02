class Weather {
    constructor() {
        var _config = module_administrator.getConfig("weather");
    
        this.config = {
            "urlWeatherDay": "https://api.openweathermap.org/data/2.5/weather",
            "urlWeatherForecast": "https://api.openweathermap.org/data/2.5/forecast",
            "appid": _config.config.appid,
            "lat": _config.config.lat,
            "lon": _config.config.lon
        };
        this.name = _config.module;
        this.weather_day_data = undefined;
        this.weather_forecast_data = undefined;
        this.symbole = {
            celsius: "C",
            fahrenheit: "F"
        }
        this.iconTable = {
			"01d": "wi-day-sunny",
			"02d": "wi-day-cloudy",
			"03d": "wi-cloudy",
			"04d": "wi-cloudy-windy",
			"09d": "wi-showers",
			"10d": "wi-rain",
			"11d": "wi-thunderstorm",
			"13d": "wi-snow",
			"50d": "wi-fog",
			"01n": "wi-night-clear",
			"02n": "wi-night-cloudy",
			"03n": "wi-night-cloudy",
			"04n": "wi-night-cloudy",
			"09n": "wi-night-showers",
			"10n": "wi-night-rain",
			"11n": "wi-night-thunderstorm",
			"13n": "wi-night-snow",
			"50n": "wi-night-alt-cloudy-windy"
		}

        // Get weather
        this.getWeatherDayByApi()
        this.getWeatherForecastByApi()

        // Set on Chekuplist of bubble
        bubble.setCheckup({
            "function": [this.getWeatherDayByApi.bind(this), this.getWeatherForecastByApi.bind(this)],
            "interval": 1800000
        });

        
        // Prepare DOM
        this.DOM = $("body").find("."+_config.position).find(".weather");
        this.weatherDayDOM = this.DOM.append("<div class='weather-day'></div>").find(".weather-day");
        this.weatherForecastDOM = this.DOM.append("<div class='weather-forecast'></div>").find(".weather-forecast");

        /*$("body").on("weather:set", function(_e, _data) {
            console.log(_data.data)
        });*/
    }

    getWeatherForecastByApi() {
        if (this.config.appid === "") {
			Log.error("CurrentWeather: APPID not set!");
			return;
        }

        var _this = this;

        var _url = this.config.urlWeatherForecast + "?lat=" + this.config.lat + "&lon=" + this.config.lon + "&appid=" + this.config.appid;
        
        var weatherRequest = new XMLHttpRequest();
		weatherRequest.open("GET", _url, true);
		weatherRequest.onreadystatechange = () => {
            if (weatherRequest.readyState === 4) {
                //console.log(JSON.parse(this.response));
                if (weatherRequest.status === 200) {
                    this.weather_forecast_data = JSON.parse(weatherRequest.response);

                    // Prepare data
                    this.prepareDataWeatherForecast();
                    
                    $("body").trigger("weather:forecast:set", {data: this.weather_forecast_data});
				} else if (weatherRequest.status === 401) {
                    console.log(this.name + ": Incorrect APPID.");
				} else {
					console.log(this.name + ": Could not load weather.");
				}
            }
        }
		weatherRequest.send();
    }

    getWeatherDayByApi() {
        if (this.config.appid === "") {
			Log.error("CurrentWeather: APPID not set!");
			return;
		}

        var _this = this;

        var _url = this.config.urlWeatherDay + "?lat=" + this.config.lat + "&lon=" + this.config.lon + "&appid=" + this.config.appid;

        var weatherRequest = new XMLHttpRequest();
		weatherRequest.open("GET", _url, true);
		weatherRequest.onreadystatechange = () => {
            if (weatherRequest.readyState === 4) {
                //console.log(JSON.parse(this.response));
                if (weatherRequest.status === 200) {
                    this.weather_day_data = JSON.parse(weatherRequest.response);
                    
                    // Config temperature unity
                    this.configTempUnity();

                    // Set on the DOM
                    this.setWeatherDayDOM();
                    
                    $("body").trigger("weather:day:set", {data: this.weather_day_data});
				} else if (weatherRequest.status === 401) {
                    console.log(this.name + ": Incorrect APPID.");
				} else {
					console.log(this.name + ": Could not load weather.");
				}
            }
        }
		weatherRequest.send();
    }

    prepareDataWeatherForecast() {
        // SEPARATE BY DATE
        // Init variable
        var _weather_forecast_data = []

        for (var i = 0; i < this.weather_forecast_data.list.length; i++) {
            var _data = this.weather_forecast_data.list[i]

            var _date = moment(_data.dt*1000).format('L');

            if(_.find(_weather_forecast_data, {dt: _date})) {
                _.find(_weather_forecast_data, {dt: _date}).data.push(_data);
            }
            else {
                _weather_forecast_data.push({
                    dt: _date,
                    data: [_data]
                })
            }
        }


        // AVERAGE
        for (var i = 0; i < _weather_forecast_data.length; i++) {
            var _dataDay = _weather_forecast_data[i];

            var _temp_min = undefined;
            var _temp_max = undefined;
            var _skyList = [];

            // Get temp
            for (var j = 0; j < _dataDay.data.length; j++) {
                var _data = _dataDay.data[j];

                if(_temp_min == undefined || _temp_min > _data.main.temp) _temp_min = _data.main.temp;
                if(_temp_max == undefined || _temp_max < _data.main.temp) _temp_max = _data.main.temp;

                _skyList.push(_data.weather[0].icon.replace("n", "d"));
            }

            // Get average sky
            var _skyListSort = [];
            for (var j = 0; j < _skyList.length; j++) {
                if(_.find(_skyListSort, {icon: _skyList[j]})) {
                    _.find(_skyListSort, {icon: _skyList[j]}).nb++;
                }
                else {
                    _skyListSort.push({
                        icon: _skyList[j],
                        nb: 1
                    })
                }
            }
            _skyList = _.orderBy(_skyListSort, ["nb"], ["desc"]);


            _dataDay.main = {
                temp_min: _temp_min,
                temp_max: _temp_max,
                icon: _skyList[0].icon
            }
        }

        this.weather_forecast_data = _weather_forecast_data;

        // Set on the DOM
        this.setWeatherForecastDOM();
    }

    configTempUnity(_kelvin) {
        if (config.temp_unity == 'celsius') {
            return this.kelvinToCelsus(_kelvin);
        }
        else if (config.temp_unity == 'fahrenheit') {
            return this.kelvinToFahrenheit(_kelvin);
        }
    }

    kelvinToCelsus(_kelvin) {
        return parseFloat( (_kelvin-273.15).toFixed(1) );
    }

    kelvinToFahrenheit(_kelvin) {
        return parseFloat( (_kelvin*9/5-459.67).toFixed(1) );
    }

    getWeatherDay() {
        return this.weather_day_data;
    }

    getTemp() {
        if(config.temp_unity == "celsius")
            return this.kelvinToCelsus(this.weather_day_data.main.temp);
        else if(config.temp_unity == "fahrenheit")
            return this.kelvinToFahrenheit(this.weather_day_data.main.temp);
        else if(config.temp_unity == "kelvin")
            return this.weather_day_data.main.temp;
    }

    getWindSpeed() {
        if(config.distance_unity == "kilometer")
            return Math.round(this.weather_day_data.wind.speed*3,6)
        else if(config.distance_unity == "mile")
            return Math.round(this.weather_day_data.wind.speed*3,6*0.62137119)
    }

    
    setWeatherForecastDOM() {
        // Reset DOM
        this.weatherForecastDOM.empty();

        for (var i = 0; i < this.weather_forecast_data.length && i < 5; i++) {
            var _dataDay = this.weather_forecast_data[i];

            var _dayDOM = $("<div class='day_ctner'></div>");
            _dayDOM.append("<div class='day'>"+moment(_dataDay.dt).format('dddd').substring(0,3)+"</div>")
            _dayDOM.append("<object class='icon' data='/ressources/svg/weather/"+this.iconTable[_dataDay.main.icon]+".svg'></object>")
            _dayDOM.append("<div class='temp_min'>" + this.configTempUnity(_dataDay.main.temp_min) + "°</div>")
            _dayDOM.append("<div class='temp_max'>" + this.configTempUnity(_dataDay.main.temp_max) + "°</div>")

            this.weatherForecastDOM.append(_dayDOM);
            
        }
        console.log(this.weather_forecast_data.length)
    }

    setWeatherDayDOM() {
        // Reset DOM
        this.weatherDayDOM.empty();

        // Prepare all part DOM
        var part1 = this.weatherDayDOM.append("<div class='part-1'></div>").find(".part-1");
        var part2 = this.weatherDayDOM.append("<div class='part-2'></div>").find(".part-2");
        //var part3 = this.DOM.append("<div class='part-3'></div>").find(".part-3");

        // PART 1
        // SET WIND
        var _windDOM = part1.append("<div class='wind'></div>").find(".wind")
        _windDOM.append('<object class="wind_icon" data="/ressources/svg/weather/wi-strong-wind.svg"></object>');
        _windDOM.append('<div class="wind_value">'+this.getWindSpeed()+'</div>');
        _windDOM.append('<div class="wind_direction">'+translator.getTranslate(this.cardinalWindDirection(this.weather_day_data.wind.deg))+'</div>');

        // SET SUN TIME
        if (this.weather_day_data.sys.sunset < new Date().getTime()/1000 || this.weather_day_data.sys.sunrise > new Date().getTime()/1000) {
            var _sun_time = this.weather_day_data.sys.sunrise;
            var _sun_icon = "wi-sunrise";
        }
        else {        
            var _sun_time = this.weather_day_data.sys.sunset;
            var _sun_icon = "wi-sunset";
        }
        var _sunDOM = part1.append("<div class='sun'></div>").find(".sun")
        _sunDOM.append('<object class="sun_icon" data="/ressources/svg/weather/'+_sun_icon+'.svg"></object>');
        _sunDOM.append("<div class='sun_time'>"+new Date(_sun_time*1000).getHours() + ":" + new Date(_sun_time*1000).getMinutes()+"</div>");

        // PART 2
        part2.append('<object class="sky" data="/ressources/svg/weather/'+this.iconTable[this.weather_day_data.weather[0].icon]+'.svg"></object>');
        part2.append("<div class='temp'>" + this.getTemp() + "°" + this.symbole[config.temp_unity] + "</div>");

        // PART 3
        //part3.append("<div class='temp_min'>Min: "+this.weather_day_data.main[config.temp_unity].temp_min+"</div>");
        //part3.append("<div class='temp_max'>Max: "+this.weather_day_data.main[config.temp_unity].temp_max+"</div>");*

        // Debug
        //console.log("weather_day_data", this.weather_day_data)
    }

    cardinalWindDirection(_windDirection) {
		if (_windDirection > 11.25 && _windDirection <= 33.75){
			return "NNE";
		} else if (_windDirection > 33.75 && _windDirection <= 56.25) {
			return "NE";
		} else if (_windDirection > 56.25 && _windDirection <= 78.75) {
			return "ENE";
		} else if (_windDirection > 78.75 && _windDirection <= 101.25) {
			return "E";
		} else if (_windDirection > 101.25 && _windDirection <= 123.75) {
			return "ESE";
		} else if (_windDirection > 123.75 && _windDirection <= 146.25) {
			return "SE";
		} else if (_windDirection > 146.25 && _windDirection <= 168.75) {
			return "SSE";
		} else if (_windDirection > 168.75 && _windDirection <= 191.25) {
			return "S";
		} else if (_windDirection > 191.25 && _windDirection <= 213.75) {
			return "SSW";
		} else if (_windDirection > 213.75 && _windDirection <= 236.25) {
			return "SW";
		} else if (_windDirection > 236.25 && _windDirection <= 258.75) {
			return "WSW";
		} else if (_windDirection > 258.75 && _windDirection <= 281.25) {
			return "W";
		} else if (_windDirection > 281.25 && _windDirection <= 303.75) {
			return "WNW";
		} else if (_windDirection > 303.75 && _windDirection <= 326.25) {
			return "NW";
		} else if (_windDirection > 326.25 && _windDirection <= 348.75) {
			return "NNW";
		} else {
			return "N";
		}
	}
}

module_administrator.modules.weather = new Weather();