# ELEMENTS

## Create a new element
To create a new element, create a new js file and add the element via the function :
``` js
bubble.setElement("name", "svg_content");
```

If you need to change the style of your element, create a scss file :

``` scss
.name_of_your_element {

}
```

## Function to use your element

- [bubble.setElementDOM](#setElementDOM)
- [bubble.removeElementDOM](#removeElementDOM)
- [bubble.setElementBubbleDOM](#setElementBubbleDOM)
- [bubble.removeElementBubbleDOM](#removeElementBubbleDOM)
- [bubble.setElementFrameDOM](#setElementFrameDOM)
- [bubble.removeElementFrameDOM](#removeElementFrameDOM)

### bubble.setElementDOM(string) <a name="setElementDOM"></a>
Set a element next to Bubble. The element will follow Bubble without being distorted by its displacement.
``` js
bubble.setElementDOM("element")
```

### bubble.removeElementDOM(string) <a name="removeElementDOM"></a>
Remove a element next to Bubble.
``` js
bubble.removeElementDOM("element")
```

### bubble.setElementBubbleDOM(string) <a name="setElementBubbleDOM"></a>
Set a element on the background.
``` js
bubble.setElementBubbleDOM("element")
```

### bubble.removeElementBubbleDOM(string) <a name="removeElementBubbleDOM"></a>
Remove a element on the Bubble.
``` js
bubble.removeElementBubbleDOM("element")
```

### bubble.setElementFrameDOM(string) <a name="setElementFrameDOM"></a>
Set a element on the background.
``` js
bubble.setElementFrameDOM("element")
```

### bubble.removeElementFrameDOM(string) <a name="removeElementFrameDOM"></a>
Remove a element on the background.
``` js
bubble.removeElementFrameDOM("element")
```