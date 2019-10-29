class Weather {
    constructor() {
        this.config = {
            "url": "https://api.openweathermap.org/data/2.5/weather",
            "appid": "e5f4423c118fe8ac01eb9c3d6e0e4f70",
            "lat": 49.44313,
            "lon": 1.09932,
        };
        this.name = "Weather";
        this.weather_data = undefined;

        // Get weather
        this.get_weather_by_api()

        // Set on Chekuplist of bubble
        bubble.checkupList.push({
            "function": [this.get_weather_by_api.bind(this)],
            "interval": 1800000
        });

        $("body").on("weather:set", function(_e, _data) {
            console.log(_data.data)
        });
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
		weatherRequest.onreadystatechange = function() {
            if (this.readyState === 4) {
                //console.log(JSON.parse(this.response));
                if (this.status === 200) {
                    _this.weather_data = JSON.parse(this.response);
                    
                    $("body").trigger("weather:set", {data: _this.weather_data});
				} else if (this.status === 401) {
                    console.log(_this.name + ": Incorrect APPID.");
				} else {
					console.log(_this.name + ": Could not load weather.");
				}
            }
        }
		weatherRequest.send();
    }
}

weather = new Weather();
