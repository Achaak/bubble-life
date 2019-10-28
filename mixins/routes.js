exports.initRoute = async function(_global, _callback) {

    var _controllerFiles = await _global.tools.getFiles(_global.path.join(__dirname, "../www/src"), "js", opts = { recursive: true, filesName:["controller"] });
    
    for (let i = 0; i < _controllerFiles.length; i++) {
        // Init variable
        _file   = _controllerFiles[i].file;
        _folder = _controllerFiles[i].folder;

        _js = require(_global.path.join(_folder, "/", _file));

        _opts = _js.getOpts(_global);

        _controllerFiles[i].opts = _opts;
        _controllerFiles[i].route = _opts.route;

        console.log("[ROUTES]      ", _opts.route)
    }

    // Static files
    _global.app.use(_global.express.static(_global.path.join(__dirname + '/../www/')));
    
    // Error path
    _global.app.get('*', function(req, res, next){

        // Test regex
        var _infospage = _global._.find(_controllerFiles, function(o) {
            return (new RegExp("^"+o.route+"$")).test(req.originalUrl);
        });

        // If page is not found or is autorize element
        var _autorizationFolder = _global._.filter(_global.opts.authorizationFolder, (o) => {
            if(req.originalUrl.includes(o)) return true;

            return false;
        });

        if (_autorizationFolder.length > 0) {
            next();
        }
        else if (!_infospage) {
            res.redirect(_global.opts.errorRoute);
            next();
        }
        else {
            // Render page
            res.render(_global.path.join(_infospage.folder, "/index.jade"), function(err, html) {
                // Set parameters
                _opts = _global._.extend({
                    pathJS : _global.path.join(_infospage.folder.replace(_global.path.join(__dirname, "../www"), "").replace("src", "build"), "/product.min.js"),
                    pathCSS: _global.path.join(_infospage.folder.replace(_global.path.join(__dirname, "../www"), "").replace("src", "build"), "/product.min.css"),
                    html   : html,
                }, _infospage.opts);

                
                _opts = _global._.extend(_global.opts.pageContent, _opts);
                
                // Get param of daemon
                var _datasPath = _global.path.join(__dirname, "../datas/daemon-params.json");
                var _datas = JSON.parse(_global.fs.readFileSync(_datasPath));
                _opts.prod = _datas.prod;

                res.render("main", {opts: _opts});
            });

            pageLoad(req.originalUrl);
        }
    });

    console.log("[ROUTES]      Routes is created".green)

    // Callback
    if (_callback) _callback();
}


function pageLoad(_page) {
    console.log(("[SERVER]      Connexion to : "+_page).blue);
}