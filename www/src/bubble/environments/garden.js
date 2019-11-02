function Garden() {

    function go() {
        // Config clothes
        bubble.setClothesOutside();
    }

    function check() {
        
    }

    function exit() {
        
    }

    return {
        "go":    () => { go();    },
        "check": () => { check(); },
        "exit":  () => { exit();  },
    };
}

bubble.setEnvironment("garden", new Garden());