class Module_administrator {
    constructor() {
        this.modules_list = undefined;
        this.modules = {};
    }

    set_modules(modules) {
        this.modules_list = modules;

        this.init_module();
    }

    async init_module() {
        for (var i = 0; i < this.modules_list.length; i++) {
            var module = this.modules_list[i];

            await $.ajax({
                url: "/src/modules/"+module.module+"/"+module.module+".js",
                dataType: "script",
                success: (a)=>{}
            });
        }
    }

    getConfig(_module) {
        return _.find(this.modules_list, {"module": _module});
    }
}

var module_administrator = new Module_administrator();