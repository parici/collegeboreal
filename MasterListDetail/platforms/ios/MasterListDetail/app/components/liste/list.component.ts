import {Component} from "@angular/core";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import * as applicationSettings from "application-settings";

@Component({
    selector: "list",
    templateUrl: "./components/liste/list.html",
})
export class ListComponent {
 
    router: Router;
    personList: Array<HTMLButtonElement>;

    messageList: Array<Object>;

 
    constructor(router: Router, location: Location) {
        this.messageList = JSON.parse(applicationSettings.getString("messageList", "[]"));
        this.messageList.push({titre: 'titre 1', description: 'description 1'});
        this.messageList.push({titre: 'titre 2', description: 'description 2'});
        this.router = router;
        //this.personList = JSON.parse(applicationSettings.getString("message", this.messageList));
        location.subscribe((path) => {
            this.messageList = JSON.parse(applicationSettings.getString("messageList", "[]"));
            this.messageList.push({titre: 'titre 1', description: 'description 1'});
            this.messageList.push({titre: 'titre 2', description: 'description 2'});
        });
    }
 
    detail(pArg) {
        applicationSettings.setString("message", pArg);
        this.router.navigate(["/detail"])
    }
 
}