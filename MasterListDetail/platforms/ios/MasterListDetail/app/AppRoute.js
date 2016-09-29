"use strict";
var router_1 = require("nativescript-angular/router");
var list_component_1 = require("./liste/list.component");
var details_component_1 = require("./details/details.component");
exports.routes = [
    { path: "", component: list_component_1.ListComponent },
    { path: "details", component: details_component_1.DetailComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.nsProvideRouter(exports.routes, {}),
];
//# sourceMappingURL=AppRoute.js.map