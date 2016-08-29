import {Component} from "@angular/core";
import {RouteConfig} from "@angular/router-deprecated";
import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router";

/*import {ListComponent} from "./components/list/list.component";
import {CreateComponent} from "./components/create/create.component";
*/
@Component({
    selector: "my-app",
    directives:[NS_ROUTER_DIRECTIVES],
    template:"<page-router-outlet></page-router-outlet>",
})
/*@RouteConfig([
    { path:"/list", component: ListComponent, name:"list", useAsDefault: true},
    { path:"/create", component: CreateComponent, name:"Create"}
])*/
export class AppComponent {}
