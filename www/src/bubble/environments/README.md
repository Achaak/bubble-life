# ENVIRONMENTS

## Create a new environments
To create a new animation, create a new js file and start with this :
``` js
function Environments_name() {

    function go() {}
    function check() {}
    function exit() {}

    return {
        "go":    () => { go();    },
        "check": () => { check(); },
        "exit":  () => { exit();  },
    };
}

bubble.setEnvironment("environments_name", new Environments_name());
```

## FUNCTIONS

- [bubble.setClothesOutside](#setClothesOutside)

### bubble.setClothesOutside() <a name="setClothesOutside"></a>
Set the clothes according to the weather in the real life.
``` js
bubble.setClothesOutside();
```
