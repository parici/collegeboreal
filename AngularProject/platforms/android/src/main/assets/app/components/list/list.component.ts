import {Component} from "@angular/core";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import * as applicationSettings from "application-settings";
 
@Component({
    selector: "list",
    templateUrl: "./components/list/list.xml",
})
export class ListComponent {
 
    router: Router;
    personList: Array<Object>;
 
    constructor(router: Router, location: Location) {
        this.router = router;
        this.personList = JSON.parse(applicationSettings.getString("people", "[]"));
        location.subscribe((path) => {
            this.personList = JSON.parse(applicationSettings.getString("people", "[]"));
        });
    }
 
    create() {
        this.router.navigate(["/create"]);
    }
 
}
