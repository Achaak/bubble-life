# ANIMATIONS

## Create a new animation
To create a new animation, create a new js file and add the animation via the function :
``` js
bubble.your_animation = () => {
    // Redefined this
    var _this = bubble;
    
    // Start animation
    _this.startAnimation();

    // End animation
    _this.endAnimation();
}
    
// Add task
bubble.setAnimation(bubble.your_animation);
```

## FUNCTIONS
- [bubble.startAnimation](#startAnimation)
- [bubble.endAnimation](#endAnimation)
- [bubble.setAnimation](#setAnimation)

### bubble.startAnimation() <a name="startAnimation"></a>
Function to send the start of the animation.
``` js
bubble.startAnimation()
```
### bubble.endAnimation() <a name="endAnimation"></a>
Function to send the end of the animation.
``` js
bubble.startAnimation()
```
### bubble.setAnimation(function) <a name="setAnimation"></a>
Function to send the animation on the animation queue.
``` js
bubble.startAnimation(bubble.your_animation)
```