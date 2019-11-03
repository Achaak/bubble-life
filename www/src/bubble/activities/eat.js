bubble.eat = () => {
    // Redefined this
    var _this = bubble;

    console.log("Go to eat !")

    // Change eyes
    _this.setEyesDOM("happy");

    // Down food
    _this.counterFood -= Math.round(Math.random() * (3 - 1) + 1);

    // Change mouse
    _this.setMouseDOM("eat");

    // Add sleep text
    _this.setElementDOM(["food_text"])
    _this.setElementBubbleDOM(["food"])
}

bubble.stop_eat = () => {
    // Redefined this
    var _this = bubble;

    // Reset the saturation
    _this.saturationReset();

    console.log("Stop eat !")

    // Change eyes
    _this.setEyesDOM("happy");

    // Change mouse
    _this.removeMouseDOM();
    
    // remove sleep text
    _this.removeElementDOM(["food_text"])
    _this.removeElementBubbleDOM(["food"])
}

bubble.check_eat = () => {
    // Redefined this
    var _this = bubble;

    // Get hour
    var _hour = new Date().getHours();

    if(
        (_hour >= 8 && _hour < 9) ||
        (_hour >= 12 && _hour < 13) ||
        (_hour >= 20 && _hour < 23)
    ) {
        if (_this.actualTask.name != "eat" && _this.saturation == 0) {
            // Add sleep task
            _this.setTask({
                name: "eat",
                function_start: _this.eat,
                task_end: {
                    name: "stop_eat",
                    function_start: _this.stop_eat
                },
                stoppable: false,
                duration: 1200000
            });
        }
    }
}
bubble.check_eat();
bubble.setCheckup({
    "function": [bubble.check_eat],
    "interval": 900000
});

bubble.saturationDown = () => {
    bubble.saturation -= 1;

    if (bubble.saturation < 0) bubble.saturation = 0;
}
bubble.setCheckup({
    "function": [bubble.saturationDown],
    "interval": 1000
});

bubble.saturationReset = () => {
    bubble.saturation = 1000;
}
bubble.saturationReset();


