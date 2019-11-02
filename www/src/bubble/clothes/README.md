# CLOTHES

## Create a new clothes
To create a new clothes, create a new js file and add the clothes via the function :
``` js
bubble.setClothes("name", "svg_content");
```

If you need to change the style of your clothes, create a scss file :

``` scss
.name_of_your_clothes {

}
```

## Function to use your clothes

- [bubble.setClothesDOM](#setClothesDOM)
- [bubble.removeClothesDOM](#removeClothesDOM)

### bubble.setClothesDOM(string) <a name="setClothesDOM"></a>
Set a clothes on Bubble.
``` js
bubble.setClothesDOM("clothes_name")
```

### bubble.removeClothesDOM(string) <a name="removeClothesDOM"></a>
Remove a clothes on Bubble.
``` js
bubble.removeClothesDOM("clothes_name")
```