class Clock {
    constructor() {
        var _config = module_administrator.getConfig("clock");

        // Set on Chekuplist of bubble
        bubble.setCheckup({
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

        // Add date
        this.DOM.append("<div class='date'>"+moment().format(translate.DAY_FORMAT)+"</div>");
        // Add time
        this.DOM.append("<div class='time'>"+moment().format('HH:mm')+"</div>");
    }
}

module_administrator.modules.clock = new Clock();