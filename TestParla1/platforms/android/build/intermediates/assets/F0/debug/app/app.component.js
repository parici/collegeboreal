"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
/*import {ListComponent} from "./components/list/list.component";
import {CreateComponent} from "./components/create/create.component";
*/
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            directives: [router_1.NS_ROUTER_DIRECTIVES],
            template: "<page-router-outlet></page-router-outlet>",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map