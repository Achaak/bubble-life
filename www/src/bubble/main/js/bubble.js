class Bubble {
    constructor() {
        this.bubbleDOM = $('.bubble');

        //this.stay_down();
        this.animation = [];
        this.animationFlag = false;

        this.lastRender = 0;
        window.requestAnimationFrame(this.loop.bind(this));
    }
    
    update(progress) {
        if(this.animation.length == 0 && this.animationFlag == false) {
            this.stay_down();
        }
        else if(this.animation.length != 0 && this.animationFlag == false) {
            this.animation[0]();
        }

    }

    loop(timestamp) {
        var progress = (timestamp - this.lastRender);

        this.update(progress);
        
        this.lastRender = timestamp;
        window.requestAnimationFrame(this.loop.bind(this));
    }

    animation_end() {
        // Delete first animation on the list
        this.animation.shift();

        // Remove flag
        this.animationFlag = false;
    }

    stay_up() {
        // Redefined this
        var _this = this;

        // Animation
        this.bubbleDOM.velocity({
            transform: ["scaleY(1)", "scaleY(0.8)"]
         }, {
            duration: 2000,
            complete: function() { _this.animationFlag = false; }
         });
    }
    
    stay_down() {
        // Redefined this
        var _this = this;

        // Add flag
        this.animationFlag = true;

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