class Bubble {
    constructor() {
        // DOM
        this.bubbleDOM      = $('.bubble');
        this.bubbleCtnerDOM = $(".bubble-ctner");

        //this.stay_down();
        this.event = [];
        this.eventFlag = false;

        this.checkupList = [];

        this.eyesList     = [];
        this.mouseList    = [];
        this.elementsList = [];

        this.state = {
            name: "happy",
            function_end: undefined
        }

        // Loop
        this.lastRender = 0;
        window.requestAnimationFrame(this.loop.bind(this));
    }
    
    update(progress) {
        if(this.event.length == 0 && this.eventFlag == false) {
            this.stay_down();
        }
        else if(this.event.length != 0 && this.eventFlag == false) {
            this.event[0]();
        }


        // Check the list
        this.checkup(progress);
    }

    loop(timestamp) {
        var progress = (timestamp - this.lastRender);

        this.update(progress);
        
        this.lastRender = timestamp;
        window.requestAnimationFrame(this.loop.bind(this));
    }

    event_end() {
        // Delete first event on the list
        this.event.shift();

        this.bubbleDOM.velocity("stop")

        // Remove flag
        this.eventFlag = false;
    }

    setState(_state) {
        // Start function end
        if (this.state.function_end != undefined) {
            this.event.push(this.state.function_end);
        }

        this.state = _state;
    }

    checkup(progress) {
        for (var i = 0; i < this.checkupList.length; i++) {
            // Defind time
            if (this.checkupList[i].time == undefined) this.checkupList[i].time = 0;
            
            // Increase time
            this.checkupList[i].time += progress;

            // If it's time
            if(this.checkupList[i].time > this.checkupList[i].interval) {
                for (var j = 0; j < this.checkupList[i].function.length; j++) {
                    this.checkupList[i].function[j]();
                }

                this.checkupList[i].time = 0;
            }
        }
    }

    setEyes(_name, _svg) { this.eyesList[_name] = _svg.replace(/cls/g, _name + "-cls"); }
    setEyesDOM(_eyes) { this.bubbleDOM.find(".eyes").html(this.eyesList[_eyes]); }

    setMouse(_name, _svg) { this.mouseList[_name] = _svg.replace(/cls/g, _name + "-cls"); }
    setMouseDOM(_mouse) {
        var _mouseDOM = this.bubbleDOM.find(".mouse");
        _mouseDOM.html(this.mouseList[_mouse]);
        
        _mouseDOM.removeAttr("class");
        _mouseDOM.addClass("mouse");
        _mouseDOM.addClass(_mouse);
    }
    removeMouseDOM() { 
        var _mouseDOM = this.bubbleDOM.find(".mouse");
        
        _mouseDOM.empty();
        _mouseDOM.removeAttr("class");
        _mouseDOM.addClass("mouse");
    }

    setElement(_name, _svg) { this.elementsList[_name] = _svg.replace(/cls/g, _name + "-cls"); }
    setElementDOM(_element) { this.bubbleCtnerDOM.append('<div class="' + _element + ' element">' + this.elementsList[_element] + '</div>'); }
    removeElementDOM(_element) { this.bubbleCtnerDOM.find('.'+_element).remove(); }
    
    setElementBubbleDOM(_element) { this.bubbleDOM.append('<div class="' + _element + ' element">' + this.elementsList[_element] + '</div>'); }
    removeElementBubbleDOM(_element) { this.bubbleDOM.find('.'+_element).remove(); }

    stay_up() {
        // Redefined this
        var _this = this;

        // Animation
        this.bubbleDOM.velocity({
            transform: ["scaleY(1)", "scaleY(0.8)"]
         }, {
            duration: 2000,
            complete: function() { _this.eventFlag = false; }
         });
    }
    
    stay_down() {
        // Redefined this
        var _this = this;

        // Add flag
        this.eventFlag = true;

        // Animation
        this.bubbleDOM.velocity({
            transform: ["scaleY(0.8)", "scaleY(1)"]
         }, {
            duration: 2000,
            complete: function() { _this.stay_up() }
         })
    }
}

var bubble = new Bubble();