class Translator {
    constructor() {
        // Get translate file
        this.getTranslateFile();
    }

    getTranslateFile() {
        // Get JSON
        $.ajax({
            dataType: "json",
            url: "/translations/"+config.language+".json",
            success: (_data) => {
                translate = _data;
            },
            fail: () => {
                console.log("Translator: translate file not found")
            }
        });
    }

    getTranslate(_string) {
        if(translate[_string])
            return translate[_string];
        
            return _string;
    }
}

var translate = undefined;
var translator = new Translator();