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

            // Set DOM module
            $("body").find("."+module.position).append("<div class='"+module.module+" module-ctner'></div>");

            await $.ajax({
                url: "/build/modules/"+module.module+"/product.min.js",
                dataType: "script",
                success: (a)=>{}
            });
            
            await $.ajax({
                url: "/build/modules/"+module.module+"/product.min.css",
                dataType: "text",
                success: (data)=>{
                    $("<style><style>").appendTo("head").html(data);
                }
            });
        }
    }

    getConfig(_module) {
        return _.find(this.modules_list, {"module": _module});
    }
}

var module_administrator = new Module_administrator();