import {RouterConfig} from "@angular/router";
import{nsProvideRouter} from "nativescript-angular/router";

import{ListComponent} from "./components/liste/list.component";
import{DetailComponent} from "./components/details/details.component";

export const routes: RouterConfig =[
   {path: "", component: ListComponent},
   {path: "details", component:DetailComponent}
];

export const APP_ROUTER_PROVIDERS =[
   nsProvideRouter(routes, {}),
];