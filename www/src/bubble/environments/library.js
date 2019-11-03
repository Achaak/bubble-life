function Library() {

    function go() {
        
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

bubble.setEnvironment("library", new Library());