exports.initCalendar = function(_global, _callback) {
    if (!_global.opts) _global.opts = {};
    
    const ical = require('node-ical');

    var getICS = (_url) => {
        //const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        ical.fromURL(_url, {}, function (err, data) {
            // Init socket io
            _global.socketIo.emit('calendar:set', { url: _url, data: data });

            //console.log(`${ev.summary} is in ${ev.location} on the ${ev.start.getDate()} of ${months[ev.start.getMonth()]} at ${ev.start.toLocaleTimeString('en-GB')}`);
        });
    }

    // Init socket io
    _global.socketIo.on('connection', function (socket) {
            
        socket.on('calendar:get', function (_data) {
            // Get the file
            getICS(_data.url);
        });

    });

    // Callback
    if (_callback) _callback();
}