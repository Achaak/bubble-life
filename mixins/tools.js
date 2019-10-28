exports.create = (_global) => {
    _GLOBAL = _global;
}

exports.getFiles = async (_folder, _extention, _opts, _filesList = []) => {
    // Extend parameters
    _opts = _GLOBAL._.extend({
        recursive: true,
    }, _opts)

    // Get files and folders
    var _files = []
    try {
        _files = await _GLOBAL.fs.readdirSync(_folder);
    } catch (e) {}

    for (let i = 0; i < _files.length; i++) {
        _file = _files[i];
        
        _split = _file.split(".")

        if (_split.length == 1 && _GLOBAL.fs.lstatSync(_folder).isDirectory() && _opts.recursive) {
            try {
                await _GLOBAL.tools.getFiles(_GLOBAL.path.join(_folder, "/"+_file), _extention, _opts, _filesList)
            }
            catch(e) {}
        }
        else if (_GLOBAL._.last(_split) == _extention) {
            // Delete last element
            _split.pop();

            if (!_opts.filesName || _opts.filesName.includes(_GLOBAL._.join(_split, '.'))) {
                _filesList.push({
                    folder: _folder,
                    file: _file
                });
            }

        }
    }

    return _filesList;
}