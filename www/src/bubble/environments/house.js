function House() {

    function go() {
        // Remove clothes
        bubble.removeClothesDOM();

        // Set sign name
        bubble.setElementFrameDOM(["sign_name"]);
        $(".bubble-frame").find(".sign_name").append('<div class="name">'+bubble.name+'</div>')
    }

    function check() {
        
    }

    function exit() {
        bubble.removeElementFrameDOM(["sign_name"]);
    }

    return {
        "go":    () => { go();    },
        "check": () => { check(); },
        "exit":  () => { exit();  }
    };
}

bubble.setEnvironment("house", new House());

bubble.goEnvironmentDOM("house")