import {Component} from "@angular/core";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import * as applicationSettings from "application-settings";
import {DetailComponent} from "../details/details.component";

@Component({
    selector: "list",
    templateUrl: "./liste/list.html",
})
export class ListComponent 
{
 
    router: Router;
    
    messageList: Array<Object>;
 
    constructor(router: Router, location: Location) 
    {
        this.router = router;
        this.messageList = JSON.parse(applicationSettings.getString("messageList", "[]"));
        this.messageList.push({titre: 'titre 1', description: 'description 1'});
        this.messageList.push({titre: 'titre 2', description: 'description 2'});
        
        //this.personList = JSON.parse(applicationSettings.getString("message", this.messageList));
        location.subscribe((path) => {
            this.messageList = JSON.parse(applicationSettings.getString("messageList", "[]"));
            this.messageList.push({titre: 'titre 1', description: 'description 1'});
            this.messageList.push({titre: 'titre 2', description: 'description 2'});
        });
    }
    detail(pArg) 
    {
        alert("le bouton liste marche");
        alert(pArg);
        let link =['/details'];
        this.router.navigate(link);
        applicationSettings.setString("message", pArg);
        //this.router.navigate(['/details']);
    }
}