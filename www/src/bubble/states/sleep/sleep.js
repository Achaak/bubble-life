bubble.sleep = () => {
    // Redefined this
    var _this = bubble;

    console.log("Go to sleep !")

    // Start event
    _this.eventFlag = true;

    // Change eyes
    _this.setEyesDOM("sleep");

    // Add sleep text
    _this.setElementDOM("sleep_text")

    // Change state
    bubble.setState({
        name: "sleep",
        function_end: bubble.wake_up
    });

    // End event
    _this.event_end();
}

bubble.wake_up = () => {
    // Redefined this
    var _this = bubble;

    console.log("Wake up !")

    // Start event
    _this.eventFlag = true;

    // Change eyes
    _this.setEyesDOM("happy");
    
    // remove sleep text
    _this.removeElementDOM("sleep_text")

    // Change state
    if(bubble.state.name == "sleep") {
        bubble.setState({
            name: "happy",
            function_end: undefined
        });
    }

    // End event
    _this.event_end();
}


bubble.check_sleep = () => {
    // Redefined this
    var _this = bubble;

    // Get hour
    var _hour = new Date().getHours();

    if(_hour <= 7 || _hour >= 23) {
        if (_this.state.name != "sleep") {
            // Add sleep event
            _this.event.push(_this.sleep);
        }
    }
    else {
        if(_this.state.name == "sleep") 
            _this.event.push(_this.wake_up);
    }
}
bubble.check_sleep();
bubble.checkupList.push({
    "function": [bubble.check_sleep],
    "interval": 900000
});