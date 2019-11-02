function Market() {
    // Init counter food
    bubble.counterFood = 0;

    function go() {
        // Config clothes
        bubble.setClothesOutside();

        // Set elements
        bubble.setElementFrameDOM(["market"]);

        bubble.counterFood = 3;
    }

    function check() {
        if(bubble.counterFood == 0) {
            bubble.setTask({
                name: "go_market",
                function_start: { function: bubble.goEnvironmentDOM.bind(bubble), "param": { name: "market" } },
                task_end: {
                    name: "go_house",
                    function_start: { function: bubble.goEnvironmentDOM.bind(bubble), "param": { name: "house" } }
                },
                stoppable: false,
                duration: 1200000
            });
        }
    }

    function exit() {
        // Remove clothes
        bubble.setClothesInside();

        // Remove element frame
        bubble.removeElementFrameDOM(["market"]);
    }

    return {
        "go":    () => { go();    },
        "check": () => { check(); },
        "exit":  () => { exit();  },
    };
}

bubble.setEnvironment("market", new Market());

bubble.setCheckup({
    "function": [bubble.environmentsList["market"].check],
    "interval": 2000
});