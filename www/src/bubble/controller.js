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
                "/build/bubble/clothes/product.min.css",
            ],
            js: [                
                "/build/bubble/eyes/product.min.js",
                "/build/bubble/floors/product.min.js",
                "/build/bubble/elements/product.min.js",
                "/build/bubble/mouse/product.min.js",
                "/build/bubble/clothes/product.min.js",
                "/build/bubble/activities/product.min.js",
                "/build/bubble/animations/product.min.js",
                "/build/bubble/environments/product.min.js",
            ]
        },
    };

    return opts;
}