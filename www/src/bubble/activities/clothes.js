bubble.setClothesOutside = () => {
    if (module_administrator.modules.weather == undefined) return false;

    if (module_administrator.modules.weather.getWeatherDay().main.temp <= 288.15) { 
        // Set coat
        bubble.setClothesDOM("coat");
    }
    
    if (module_administrator.modules.weather.getWeatherDay().main.temp >= 293.15 && 
        module_administrator.modules.weather.getWeatherDay().weather[0].main == "Clear" &&
        module_administrator.modules.weather.getWeatherDay().sys.sunset > new Date().getTime()/1000) {
        bubble.setEyesDOM("sunglass");
    }
    
    if (module_administrator.modules.weather.getWeatherDay().weather[0].main == "Rain") {
        bubble.setElementBubbleDOM(["umbrella"]);
    }
}

bubble.setClothesInside = () => {
    bubble.removeClothesDOM();
    
    bubble.setEyesDOM("happy");
    
    // Remove weather element
    bubble.removeElementBubbleDOM(["umbrella"]);
}