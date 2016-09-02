"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var application_1 = require("nativescript-angular/application");
var router_1 = require("nativescript-angular/router");
var app_component_1 = require("./app.component");
var list_component_1 = require("./components/liste/list.component");
//import {CreateComponent} from "./components/create/create.component";
exports.AppRoutes = [
    { path: "", component: list_component_1.ListComponent } //,
];
application_1.nativeScriptBootstrap(app_component_1.AppComponent, [[router_1.nsProvideRouter(exports.AppRoutes, {})]]);
//# sourceMappingURL=main.js.map