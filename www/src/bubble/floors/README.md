# FLOORS

## Create a new floor
To create a new floor, create a new js file and add the floor via the function :
``` js
bubble.setFloor("name", "svg_content");
```

If you need to change the style of your floor, create a scss file :

``` scss
.name_of_your_floor {

}
```

## Function to use your floor

- [bubble.setFloorDOM](#setFloorDOM)
- [bubble.resetFloorDOM](#resetFloorDOM)

### bubble.setFloorDOM(string) <a name="setFloorDOM"></a>
Set a floor.
``` js
bubble.setFloorDOM("floor_name")
```

### bubble.resetFloorDOM() <a name="resetFloorDOM"></a>
Reset the floor to simple.
``` js
bubble.resetFloorDOM()
```