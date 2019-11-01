class Calendar {
    constructor() {
        this.config = module_administrator.getConfig("calendar");

        // Set on Chekuplist of bubble
        /*bubble.checkupList.push({
            "function": [this.setDateDOM.bind(this)],
            "interval": 1000
        });*/

        this.eventsList = [];
        
        // Prepare DOM
        this.DOM = $("body").find("."+this.config.position).find(".calendar");

        this.socket = io();

        // Init
        this.initSocketIo();
    }

    initSocketIo() {
        for (var i = 0; i < this.config.config.calendar.length; i++) {
            this.socket.emit('calendar:get', { url: this.config.config.calendar[i].ical });
        }
        
        var _this = this

        this.socket.on('calendar:set', function (_data) {
            for(var i in _data.data) {
                var _event = [i,_data.data[i]][1];

                if (_event.type == "VEVENT") {
                    _this.eventsList.push({
                        icon: _.find(_this.config.config.calendar, { ical: [i,_data.data[i]][0] }),
                        start: _event.start,
                        end: _event.end,
                    });
                    if (_event.rrule)
                    console.log(_event, _event.rrule.origOptions)
                }
            }

            //console.log(_this.eventsList)
        });   
    }

    
    initCalendar() {

    }


    setCalendarDOM() {
        // Reset the DOM
        this.DOM.empty();


    }
}

module_administrator.modules.calendar = new Calendar();