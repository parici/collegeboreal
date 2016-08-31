import {Component} from "@angular/core";
import {Location} from "@angular/common";
import {Router} from "@angular/router-deprecated";
import * as applicationSettings from "application-settings";
import {nsProvideRouter} from "nativescript-angular/router";


@Component({
    selector: "list",
    templateUrl: "./components/list/list.html",
})
export class ListComponent {
    
    private router: Router;
    public personList: Array<Object>;

    constructor(router: Router, location: Location){
        this.router = router;
        this.personList = JSON.parse(applicationSettings.getString("people", "[]"));
        location.subscribe((path)=> {
            this.personList = JSON.parse(applicationSettings.getString("people", "[]"));
        });
    }

    create(){
        this.router.navigate(["Create"]);
    }

}
