function House() {

    function go() {
        // Remove clothes
        bubble.removeClothesDOM();
    }

    function check() {
        
    }

    function exit() {
        
    }

    return {
        "go":    () => { go();    },
        "check": () => { check(); },
        "exit":  () => { exit();  }
    };
}

bubble.setEnvironment("house", new House());