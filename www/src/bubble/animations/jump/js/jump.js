bubble.jump = () => {
    // Redefined this
    var _this = bubble;

    // Add animation
    _this.animation.push(_this.jump_up);
}

bubble.jump_up = () => {
    // Redefined this
    var _this = bubble;

    // Add animation flag
    _this.animationFlag = true;

    // Animation
    _this.bubbleDOM.velocity({
        bottom: "200px",
        transform: ["scaleX(0.7)", "scaleX(1)"]
     }, {
        duration: 500,
        easing: 'easeOutQuad',
        complete: function() { _this.jump_down() }
     });
}

bubble.jump_down = () => {
    // Redefined this
    var _this = bubble;

    // Animation down
    _this.bubbleDOM.velocity({
        bottom: "0px",
        transform: ["scaleX(1)", "scaleX(0.7)"]
     }, {
        duration: 400,
        easing: 'easeInQuad',
     })

     // Animation splash
     _this.bubbleDOM.velocity({
         bottom: "0px",
         transform: ["scaleY(0.7)", "scaleY(1)"]
    }, {
        duration: 100,
        easing: 'easeOutQuad',
    })
    _this.bubbleDOM.velocity({
        bottom: "0px",
        transform: ["scaleY(1)", "scaleY(0.7)"]
    }, {
        duration: 300,
        easing: 'easeOutQuad',
        complete: function() { _this.animation_end(); }
    })
}