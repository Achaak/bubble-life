# EYES


## Create a new eyes
To create a new eyes, create a new js file and add the eyes via the function :
``` js
bubble.setEyes("name", "svg_content");
```

If you need to change the style of your eyes, create a scss file :

``` scss
.name_of_your_eyes {

}
```

## Function to use your eyes

- [bubble.setEyesDOM](#setEyesDOM)
- [bubble.resetEyesDOM](#resetEyesDOM)

### bubble.setEyesDOM(string) <a name="setEyesDOM"></a>
Set a eyes.
``` js
bubble.setEyesDOM("floor_name")
```

### bubble.resetEyesDOM() <a name="resetEyesDOM"></a>
Reset the eyes to happy.
``` js
bubble.resetEyesDOM()
```