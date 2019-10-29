exports.getOpts = function(_global) {
    var opts = {
        route: "/",
        title: "test",
        description: "Hello world",
        //hrefIcon   : "",

        // Open Graph
        //openGraph : {
        //    title      : "",
        //    description: "",
        //    image      : "",
        //    type       : "",
        //    url        : ""
        //}

        
        // Components
        components: {
            css: [
                "/build/bubble/elements/product.min.css",
                "/build/bubble/mouse/product.min.css",
            ],
            js: [
                "/module_config.js",

                "/build/bubble/animations/jump/product.min.js",

                "/build/bubble/states/sleep/product.min.js",
                "/build/bubble/states/eat/product.min.js",
                
                "/build/bubble/eyes/product.min.js",
                "/build/bubble/elements/product.min.js",
                "/build/bubble/mouse/product.min.js",
            ]
        },
    };

    return opts;
}