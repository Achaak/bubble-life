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
            css: [],
            js: [
                "/build/bubble/animations/jump/product.min.js"
            ]
        },
    };

    return opts;
}