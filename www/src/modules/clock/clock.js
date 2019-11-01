class Clock {
    constructor() {
        var _config = module_administrator.getConfig("clock");

        // Set on Chekuplist of bubble
        bubble.checkupList.push({
            "function": [this.setDateDOM.bind(this)],
            "interval": 1000
        });
        
        // Prepare DOM
        this.DOM = $("body").find("."+_config.position).find(".clock");

        // Init
        this.setDateDOM();
    }


    setDateDOM() {
        // Reset the DOM
        this.DOM.empty();

        console.log("lol")
        // Add date
        this.DOM.append("<div class='date'>"+moment().format('dddd, LL')+"</div>");
        // Add time
        this.DOM.append("<div class='time'>"+moment().format('HH:mm')+"</div>");
    }
}

module_administrator.modules.clock = new Clock();