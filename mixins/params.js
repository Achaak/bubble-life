exports.getParams = function(_global, _callback) {
    if (!_global.opts) _global.opts = {};

    _global.opts = {
        // Page contents
        pageContent: {
            title      : "Title",
            description: "Hello world",
            hrefIcon   : "",
    
            // Open Graph
            openGraph : {
                title      : "",
                description: "",
                image      : "",
                type       : "",
                url        : ""
            }
        },

        // Route
        errorRoute  : '/',

        // Components
        components: {
            css: [],
            js: [
                "components/jquery/jquery.min.js",
                "components/velocity/velocity.min.js",
                "components/lodash/lodash.js",
                "components/moment/moment.js",
            ]
        },

        authorizationFolder: [
            "/build",
            "/assets",
            "/translations",
            "/fonts",
            "/reload",
            "/socket.io"
        ]
    };

    // Callback
    if (_callback) _callback();
}