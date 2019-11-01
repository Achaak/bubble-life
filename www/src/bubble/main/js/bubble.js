class Bubble {
    constructor() {
        // DOM
        this.bubbleDOM      = $('.bubble');
        this.bubbleCtnerDOM = $(".bubble-ctner");
        this.bubbleFrameDOM = $(".bubble-frame");


        // TASKS
        this.taskList = [];
        this.defaultTask = {
            name: "stay",
            task_end: undefined,
            function_start: () => {},
            duration: undefined,
            stoppable: true
        };
        this.actualTask = this.defaultTask;


        // ANIMATIONS
        this.animationList = [];
        this.animationFlag = false;


        // ELEMENTS
        this.eyesList         = [];
        this.mouseList        = [];
        this.elementsList     = [];
        this.environmentsList = [];
        this.clothesList      = [];
        this.floorsList       = [];

        this.environment = 'house';

        // LOOP
        this.checkupList = [];

        this.lastRender = 0;
        window.requestAnimationFrame(this.loop.bind(this));
    }
    
    update(progress) {
        // TASKS
        if(this.taskList.length != 0 && this.actualTask.stoppable == true) {
            // Start task function
            if(this.taskList[0].function_start.function)
                this.taskList[0].function_start.function(this.taskList[0].function_start.param.name);
            else
                this.taskList[0].function_start();

            // Save the task
            this.actualTask = this.taskList[0];

            // Set end and start to the task
            if (this.actualTask.duration != undefined) {
                this.actualTask = $.extend({
                    time_end: (new Date().getTime() + this.actualTask.duration),
                    time_start: new Date().getTime()
                }, this.actualTask);
            }

            // Remove the task
            this.taskList.shift();
        }
        
        // Check actual task
        this.check_actual_task();


        // CHECKUP LIST
        this.checkup(progress);


        // ANIMATION
        if(this.animationList.length == 0 && this.animationFlag == false) {
            this.setAnimation(this.stay_down.bind(this));
        }

        if(this.animationList.length != 0 && this.animationFlag == false) {
            this.animationList[0]();

            // Remove the task
            this.animationList.shift();
        }
    }

    loop(timestamp) {
        var progress = (timestamp - this.lastRender);

        this.update(progress);
        
        this.lastRender = timestamp;
        window.requestAnimationFrame(this.loop.bind(this));
    }

    setTask(_task) {
        // Extend with default task
        _task = $.extend(_.clone(this.defaultTask), _task);

        if (_task.duration == undefined) _task.stoppable = true;

        // Set task in task list
        this.taskList.push(_task);
    }
    check_actual_task() {
        if(this.actualTask.time_end < new Date().getTime()) {
            // Call task end
            this.task_end();
        }
        else if (this.taskList.length == 0 && 
            this.actualTask.task_end == undefined && 
            (this.actualTask.time_end > new Date().getTime() || this.actualTask.time_end == undefined)) {
                // Set the default task
                this.setTask(this.defaultTask);
        }
    }
    task_end() {
        if(this.actualTask.time_end < new Date().getTime()) {
            // Set the end task
            this.setTask(this.actualTask.task_end);

            // Set stoppable true
            this.actualTask.stoppable = true;
        }
    }

    setAnimation(_animation) { this.animationList.push(_animation) }
    startAnimation() { this.animationFlag = true;  }
    endAnimation()   { this.animationFlag = false; }

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

    // EYES
    setEyes(_name, _svg) { this.eyesList[_name] = _svg.replace(/cls/g, _name + "-cls"); }
    setEyesDOM(_eyes) { this.bubbleDOM.find(".eyes").html(this.eyesList[_eyes]); }

    // CLOTHES
    setClothes(_name, _svg) { this.clothesList[_name] = _svg.replace(/cls/g, _name + "-cls"); }
    setClothesDOM(_clothes) { 
        var _clothesDOM = this.bubbleDOM.find(".clothes");
        _clothesDOM.html(this.clothesList[_clothes]);
        
        _clothesDOM.removeAttr("class");
        _clothesDOM.addClass("clothes");
        _clothesDOM.addClass(_clothes);
    }
    removeClothesDOM() { 
        var _clothesDOM = this.bubbleDOM.find(".clothes");
        
        _clothesDOM.empty();
        _clothesDOM.removeAttr("class");
        _clothesDOM.addClass("clothes");
    }
    configClothes() {
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
            bubble.setElementBubbleDOM("umbrella");
        }
    }

    // MOUSE
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

    // FLOORS
    setFloor(_name, _svg) { this.floorsList[_name] = _svg.replace(/cls/g, _name + "-cls"); }
    setFloorDOM(_floor) {
        var _floorDOM = this.bubbleFrameDOM.find(".floor");
        _floorDOM.html(this.floorsList[_floor]);
        
        _floorDOM.removeAttr("class");
        _floorDOM.addClass("floor");
        _floorDOM.addClass(_floor);
    }
    removeFloorDOM() { 
        var _floorDOM = this.bubbleFrameDOM.find(".floor");
        
        _floorDOM.empty();
        _floorDOM.removeAttr("class");
        _floorDOM.addClass("floor");
    }

    // ELEMENTS
    setElement(_name, _svg) { this.elementsList[_name] = _svg.replace(/cls/g, _name + "-cls"); }
    setElementDOM(_element) { this.bubbleCtnerDOM.append('<div class="' + _element + ' element">' + this.elementsList[_element] + '</div>'); }
    removeElementDOM(_element) { this.bubbleCtnerDOM.find('.'+_element).remove(); }
    
    // ELEMENTS BUBBLE
    setElementBubbleDOM(_element) { this.bubbleDOM.append('<div class="' + _element + ' element">' + this.elementsList[_element] + '</div>'); }
    removeElementBubbleDOM(_element) { this.bubbleDOM.find('.'+_element).remove(); }

    // ELEMENTS FRAME
    setElementFrameDOM(_element) { this.bubbleFrameDOM.append('<div class="' + _element + ' element">' + this.elementsList[_element] + '</div>'); }
    removeElementFrameDOM(_element) { this.bubbleFrameDOM.find('.'+_element).remove(); }

    // ENVIRONMENTS
    setEnvironment(_name, _class) {
        this.environmentsList[_name] = _class;
    }
    goEnvironmentDOM(_name) {
        console.log("Go to the " + _name);

        var _newEnvironment  = this.environmentsList[_name];
        var _pastEnvironment = this.environmentsList[this.environment];

        // Exit past environment
        _pastEnvironment.exit();

        // Set name environment
        this.environment = _name;

        // Go to the new environment
        _newEnvironment.go();
    }

    stay_up() {
        // Redefined this
        var _this = this;

        // Animation
        this.bubbleDOM.velocity({
            transform: ["scaleY(1)", "scaleY(0.8)"]
         }, {
            duration: 2000,
            complete: function() {
                // End animation
                _this.endAnimation(); 
            }
        });
    }
    
    stay_down() {
        // Redefined this
        var _this = this;

        // Start animation
        this.startAnimation();

        // Animation
        this.bubbleDOM.velocity({
            transform: ["scaleY(0.8)", "scaleY(1)"]
        }, {
            duration: 2000,
            complete: function() { _this.stay_up(); }
        });
    }
}

var bubble = new Bubble();