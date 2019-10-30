function Garden() {

    function go() {
        // Config clothes
        bubble.configClothes();
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