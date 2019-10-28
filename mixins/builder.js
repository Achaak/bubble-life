exports.initBuilder = async (_global, _callback) => {
    var _GLOBAL   = _global;
    var _CALLBACK = _callback;

    var _FILE          = 0;
    var _FILE_COMPILED = 0;


    var MAIN_FOLDER = "/../www/src/bubble/main";


    await _GLOBAL.rimraf(_GLOBAL.path.join(__dirname, "../www/build"), async () => {
        init(_GLOBAL);
    });

    function isFinish() {
        if (_FILE != _FILE_COMPILED) return false
    
        console.log("[BUILDER]     Build is created".green)
        
        // Callback
        if (_CALLBACK) _CALLBACK();
    }
    
    
    async function init( _callback) {
    
        // ----
        // -- CREATE PRODUCTS BUILD
        // ----
    
        // Get all path of the jade file
        var _filePathJade = await _GLOBAL.tools.getFiles(
            _GLOBAL.path.join(__dirname, "../www/src"),
            "jade",
            opts = {
                recursive: true,
                filesName: ["index"]
            }
        );

    
        // Prepare all file path for js, css and scss
        var _filePath = [];
    
        for (let i = 0; i < _filePathJade.length; i++)
            _filePath.push(_filePathJade[i].folder);
    

        // Get the folder js
        var _filePathJs = await _GLOBAL.tools.getFiles(
            _GLOBAL.path.join(__dirname, "../www/src"),
            "js",
            opts = {
                recursive: true
            }
        );
        _filePathJs = _GLOBAL._.map(_filePathJs, 'folder');
        _filePathJs = _GLOBAL._.uniqWith(_filePathJs, _GLOBAL._.isEqual);

        for (let i = 0; i < _filePathJs.length; i++) {
            var _folder = _filePathJs[i];

            var _filesJs = await _GLOBAL.tools.getFiles(_folder, "js", opts = { recursive: false, except: ["controller"]});
            if(_filesJs.length) _FILE ++;

            await minifyProductJs(_filesJs);
        }
    

        // SCSS
        for (let i = 0; i < _filePath.length; i++) {
            var _folder = _filePath[i];
            
            var _filesScss = await _GLOBAL.tools.getFiles(_GLOBAL.path.join(_folder, "/scss"), "scss", opts = { recursive: false});
            if(_filesScss.length) _FILE ++;
            await minifyProductScss(_filesScss);
        }

        // Launch SCSS minifier for main js
        var _filesJs = await _GLOBAL.tools.getFiles(_GLOBAL.path.join(__dirname, MAIN_FOLDER, "/js"), "js", opts = { recursive: false});
        if(_filesJs.length) _FILE ++;
        await minifyProductJs(_filesJs);
    
        // Launch SCSS minifier for main scss
        var _filesScss = await _GLOBAL.tools.getFiles( _GLOBAL.path.join(__dirname, MAIN_FOLDER, "/scss"), "scss", opts = { recursive: false});
        if(_filesScss.length) _FILE ++;
        await minifyProductScss(_filesScss);
    
    
    
        // Minify the components files
        await minifyComponentsJs(_GLOBAL);
        await minifyComponentsCss(_GLOBAL);
    }
    
    
    // ----
    // -- PRODUCT
    // ----
    
    // Function to minify the JS in product file
    async function minifyProductJs(_filesPath) {
        console.log("[BUILDER]     Prepare JS: ", _filesPath)
    
        // If the _filesPath is empty
        if(_filesPath.length == 0)
            return false;
    
        // Defind files content
        var _filesContent = {};
        for (let i = 0; i < _filesPath.length; i++) {
            _filesContent["file"+i] = await _GLOBAL.asyncReadFile(_GLOBAL.path.join(_filesPath[i].folder, "/"+_filesPath[i].file), "utf8");
        }
    
        // Minify files
        var _minifyJs = await _GLOBAL.uglifyJS.minify(_filesContent);
    
        // Create folder
        await _GLOBAL.asyncMkdir(_GLOBAL._.first(_filesPath).folder.replace("src", "build").replace(_GLOBAL.path.join("/", "js"), ""), { recursive: true });
        
        // Create file
        _GLOBAL.fs.writeFile(_GLOBAL.path.join(_GLOBAL._.first(_filesPath).folder.replace("src", "build").replace(_GLOBAL.path.join("/", "js"), ""), "/product.min.js"), _minifyJs.code, (err) => {
            if (err) return console.log("[ERROR] "+ JSON.stringify(err).red);
            
            _FILE_COMPILED++;
            isFinish();
        });
    }
    
    
    // Function to minify the SCSS in product file
    async function minifyProductScss(_filesPathScss) {
        console.log("[BUILDER]     Prepare SCSS: ", _filesPathScss)
    
        // If the _filesPath is empty
        if(_filesPathScss.length == 0)
            return false;
    
        // Event for minify all css
        var _cssPathList = [];
    
        for (let i = 0; i < _filesPathScss.length; i++) {
            var _filePath = _filesPathScss[i];
    
            // Compile scss file
            _GLOBAL.sass.render({
                file: _GLOBAL.path.join(_filePath.folder, "/"+_filePath.file)
            }, async function(err, result) {
                
                // If error
                if (err) return console.log("[ERROR] "+ JSON.stringify(err).red);
    
    
                // Create folder
                var _mkdirPath = _GLOBAL.path.join(result.stats.entry, "/..");
                _mkdirPath = _mkdirPath.replace(_GLOBAL.path.join("/", "scss"), "");
                _mkdirPath = _mkdirPath.replace("src", "build");
                
                await _GLOBAL.asyncMkdir(_mkdirPath, { recursive: true });
    
                // Create file
                var _cssPath = result.stats.entry;
                _cssPath = _cssPath.replace(".scss", ".css");
                _cssPath = _cssPath.replace(_GLOBAL.path.join("/", "scss"), "");
                _cssPath = _cssPath.replace("src", "build");
                
                // Write file
                _GLOBAL.fs.writeFile(_cssPath, result.css, (err) => {
                    if (err) return console.log("[ERROR] "+ JSON.stringify(err).red);
                    
                    // Add css path on the list
                    _cssPathList.push(_cssPath);
        
                    // If the last scss is compile
                    if (_cssPathList.length == _filesPathScss.length) {
                        minifyProductCss(_cssPathList);
                    }
                });
            });
        }
    }
    
    
    // Function to minify the CSS in product file
    async function minifyProductCss(_cssPathList) {
        // Minify css
        var uglified = await _GLOBAL.uglifycss.processFiles(
            _cssPathList,
            { maxLineLen: 500, expandVars: true }
        );
    
        // Write the minify css
        var _cssPath = _GLOBAL.path.join(_GLOBAL._.first(_cssPathList), "/../product.min.css");
        await _GLOBAL.asyncWriteFile(_cssPath, uglified, function(err){});
    
        // Delete css file
        for (let i = 0; i < _cssPathList.length; i++) {
            _GLOBAL.rimraf(_cssPathList[i], function () {});
        }
    
        _FILE_COMPILED++;
        isFinish();
    }
    
    
    
    
    
    // ----
    // -- COMPONENT
    // ----
    
    // Function to minify the JS in component file
    async function minifyComponentsJs() {
        // Defind files content
        var _filesContent = {};
    
        for (let i = 0; i < _GLOBAL.opts.components.js.length; i++) {
            _filePath = _GLOBAL.path.join(__dirname, "../www", _GLOBAL.opts.components.js[i]);
            _filesContent["file"+i] = _GLOBAL.fs.readFileSync(_GLOBAL.path.join(_filePath), "utf8");
        }


        // If has not components js
        if (_filesContent == {})
            return false;


        _FILE++;
    
        // Minify files
        var _minify = _GLOBAL.uglifyJS.minify(_filesContent);
    
        // Create folder
        await _GLOBAL.fs.mkdir(_GLOBAL.path.join(__dirname, "../www/build"), { recursive: true }, async (_err) => {
            // Create file
            await _GLOBAL.fs.writeFileSync(_GLOBAL.path.join(__dirname, "../www/build", "/components.min.js"), _minify.code, "utf8");
    
            _FILE_COMPILED++;
            isFinish();
        });
    }
    
    // Function to minify the css in component file
    async function minifyComponentsCss() {

        // If has not components css
        if (!_GLOBAL.opts.components.css.length)
            return false;

        
        _FILE++;
    
        // Foramt css path
        for (let i = 0; i < _GLOBAL.opts.components.css.length; i++) {
            _GLOBAL.opts.components.css[i] = _GLOBAL.path.join(__dirname, "../www/components", _GLOBAL.opts.components.css[i]);
        }


    
        // If is empty
        if(_GLOBAL.opts.components.css.length == false) return false;
    
        // Minify css
        var uglified = await _GLOBAL.uglifycss.processFiles(
            _GLOBAL.opts.components.css,
            { maxLineLen: 500, expandVars: true }
        );
    
        // Write the minify css
        await _GLOBAL.fs.writeFile(_GLOBAL.path.join(__dirname, "../www/build", "/components.min.css"), uglified, function(err){});
        
        _FILE_COMPILED++;
        isFinish();
    }
}