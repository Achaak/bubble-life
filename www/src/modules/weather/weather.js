class Weather {
    constructor() {
        var _config = module_administrator.getConfig("weather");
        console.log(_config)
        this.config = {
            "url": "https://api.openweathermap.org/data/2.5/weather",
            "appid": _config.config.appid,
            "lat": _config.config.lat,
            "lon": _config.config.lon
        };
        this.name = _config.module;
        this.weather_data = undefined;

        // Get weather
        this.get_weather_by_api()

        // Set on Chekuplist of bubble
        bubble.checkupList.push({
            "function": [this.get_weather_by_api.bind(this)],
            "interval": 1800000
        });

        /*$("body").on("weather:set", function(_e, _data) {
            console.log(_data.data)
        });*/
    }

    get_weather_by_api() {
        if (this.config.appid === "") {
			Log.error("CurrentWeather: APPID not set!");
			return;
		}

        var _this = this;

        var _url = this.config.url + "?lat=" + this.config.lat + "&lon=" + this.config.lon + "&appid=" + this.config.appid;

        var weatherRequest = new XMLHttpRequest();
		weatherRequest.open("GET", _url, true);
		weatherRequest.onreadystatechange = () => {
            if (weatherRequest.readyState === 4) {
                //console.log(JSON.parse(this.response));
                if (weatherRequest.status === 200) {
                    this.weather_data = JSON.parse(weatherRequest.response);
                    
                    // Config temperature unity
                    this.configTempUnity();
                    
                    $("body").trigger("weather:set", {data: this.weather_data});
				} else if (weatherRequest.status === 401) {
                    console.log(this.name + ": Incorrect APPID.");
				} else {
					console.log(this.name + ": Could not load weather.");
				}
            }
        }
		weatherRequest.send();
    }

    configTempUnity() {
        if (config.temp_unity == 'C') {
            this.weather_data.main.celsius = {};
            this.weather_data.main.celsius.temp     = this.kelvinToCelsus(this.weather_data.main.temp);
            this.weather_data.main.celsius.temp_max = this.kelvinToCelsus(this.weather_data.main.temp_max);
            this.weather_data.main.celsius.temp_min = this.kelvinToCelsus(this.weather_data.main.temp_min);
        }
        else if (config.temp_unity == 'F') {
            this.weather_data.main.fahrenheit = {};
            this.weather_data.main.fahrenheit.temp     = this.kelvinToFahrenheit(this.weather_data.main.temp);
            this.weather_data.main.fahrenheit.temp_max = this.kelvinToFahrenheit(this.weather_data.main.temp_max);
            this.weather_data.main.fahrenheit.temp_min = this.kelvinToFahrenheit(this.weather_data.main.temp_min);
        }
    }

    kelvinToCelsus(_kelvin) {
        return Math.round(_kelvin-273.15);
    }

    kelvinToFahrenheit(_kelvin) {
        return Math.round(_kelvin*9/5-459.67);
    }

    getWeather() {

    }
}

module_administrator.modules.weather = new Weather();
