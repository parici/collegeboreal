// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
//import {nsProvideRouter} from "nativescript-angular/router";
import {APP_ROUTER_PROVIDERS} from "./AppRoute"

import {RouterConfig} from "@angular/router";
import {AppComponent} from "./app.component";
 
import {ListComponent} from "./liste/list.component";
import {DetailComponent} from "./details/details.component";
//import {CreateComponent} from "./components/create/create.component";
 
/*export const AppRoutes: RouterConfig = [
    { path: "", component: ListComponent }//,
    //il ne peut pas trouver la classe DetailComponent car je pense que la route n'est bonne 
    //{ path: "../details/", component: DetailComponent}
]*/
 
nativeScriptBootstrap(AppComponent, [APP_ROUTER_PROVIDERS ]);