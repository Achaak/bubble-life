bubble.sleep = () => {
    // Redefined this
    var _this = bubble;

    console.log("Go to sleep !")

    // Change eyes
    _this.setEyesDOM("sleep");

    // Add sleep text
    _this.setElementDOM("sleep_text")
}

bubble.wake_up = () => {
    // Redefined this
    var _this = bubble;

    console.log("Wake up !")

    // Change eyes
    _this.setEyesDOM("happy");
    
    // remove sleep text
    _this.removeElementDOM("sleep_text")
}


bubble.check_sleep = () => {
    // Redefined this
    var _this = bubble;

    var _hourStart = 23;
    var _hourEnd   = 8;

    // Get hour
    var _hour = new Date().getHours();

    if(_hour < _hourEnd || _hour >= _hourStart) {
        // Get time to sleep
        var _wakeUpDate = new Date().getTime();
        if(_hour >= _hourStart) _wakeUpDate += (24-_hour+8) * 3600000;
        else                    _wakeUpDate += (_hourEnd-_hour) * 3600000;

        if (_this.actualTask.name != "sleep") {
            // Add sleep task
            _this.setTask({
                name: "sleep",
                function_start: _this.sleep,
                task_end: {
                    name: "wake_up",
                    function_start: _this.wake_up
                },
                stoppable: false,
                duration: _wakeUpDate-new Date()
            });
        }
    }
}
bubble.check_sleep();
bubble.setCheckup({
    "function": [bubble.check_sleep],
    "interval": 900000
});