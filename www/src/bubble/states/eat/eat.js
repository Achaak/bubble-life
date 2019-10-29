bubble.eat = () => {
    // Redefined this
    var _this = bubble;

    console.log("Go to eat !")

    // Start event
    _this.eventFlag = true;

    // Change eyes
    _this.setEyesDOM("happy");

    // Change mouse
    _this.setMouseDOM("eat");

    // Add sleep text
    _this.setElementDOM("food_text")
    _this.setElementBubbleDOM("food")

    // Change state
    bubble.setState({
        name: "eat",
        function_end: bubble.stop_eat
    });

    // End event
    _this.event_end();
}

bubble.stop_eat = () => {
    // Redefined this
    var _this = bubble;

    console.log("Stop eat !")

    // Start event
    _this.eventFlag = true;

    // Change eyes
    _this.setEyesDOM("happy");

    // Change mouse
    _this.removeMouseDOM();
    
    // remove sleep text
    _this.removeElementDOM("food_text")
    _this.removeElementBubbleDOM("food")

    // Change state
    if(bubble.state.name == "eat") {
        bubble.setState({
            name: "happy",
            function_end: undefined
        });
    }

    // End event
    _this.event_end();
}

bubble.check_eat = () => {
    // Redefined this
    var _this = bubble;

    // Get hour
    var _hour = new Date().getHours();

    if(
        (_hour >= 8 && _hour < 9) ||
        (_hour >= 12 && _hour < 13) ||
        (_hour >= 20 && _hour < 21)
    ) {
        if (_this.state.name != "eat") {
            // Add sleep event
            _this.event.push(_this.eat);
        }
    }
    else {
        //if(_this.state.name == "eat") 
            //_this.event.push(_this.stop_eat);
    }
}
bubble.check_eat();
bubble.checkupList.push({
    "function": [bubble.check_eat],
    "interval": 900000
});