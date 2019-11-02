# MOUSE

## Create a new mouse
To create a new mouse, create a new js file and add the mouse via the function :
``` js
bubble.setMouse("name", "svg_content");
```

If you need to change the style of your mouse, create a scss file :

``` scss
.name_of_your_mouse {

}
```

## Function to use your mouse

- [bubble.setMouseDOM](#setMouseDOM)
- [bubble.removeMouseDOM](#removeMouseDOM)

### bubble.setMouseDOM(string) <a name="setMouseDOM"></a>
Set a mouse.
``` js
bubble.setMouseDOM("mouse_name")
```

### bubble.removeMouseDOM() <a name="removeMouseDOM"></a>
Remove the mouse to simple.
``` js
bubble.removeMouseDOM()
```