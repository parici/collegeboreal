"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var application_1 = require("nativescript-angular/application");
//import {nsProvideRouter} from "nativescript-angular/router";
var AppRoute_1 = require("./AppRoute");
var app_component_1 = require("./app.component");
//import {CreateComponent} from "./components/create/create.component";
/*export const AppRoutes: RouterConfig = [
    { path: "", component: ListComponent }//,
    //il ne peut pas trouver la classe DetailComponent car je pense que la route n'est bonne
    //{ path: "../details/", component: DetailComponent}
]*/
application_1.nativeScriptBootstrap(app_component_1.AppComponent, [AppRoute_1.APP_ROUTER_PROVIDERS]);
//# sourceMappingURL=main.js.map