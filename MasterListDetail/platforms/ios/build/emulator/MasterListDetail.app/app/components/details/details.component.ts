import {Component} from "@angular/core";
import {Location} from "@angular/common";
import * as applicationSettings from "application-settings";
import {ListComponent} from "../liste/list.component";
 
@Component({
    selector: "detail",
    templateUrl: "./components/details/details.html",
})
export class DetailComponent {
 
    location: Location;
    titre: string;
    description: string;
    //messageList: Array<Object>;
 
    constructor(location: Location) 
    {
        this.location = location;
        this.titre = "";
        this.description = "";
        var messageList: Array<Object> =  JSON.parse(applicationSettings.getString("message", "[]"));
        this.titre = messageList[0]["titre"];
        this.description = messageList[0]["description"];
    }
}

    /*public leDetail(){
            this.titre = "ceci est le titre";
            this.description = "La description est la suivante"
        }
*
    }*/
    /*save() {
        if(this.titre != "" && this.description != "") {
            var message: Array<Object> = JSON.parse(applicationSettings.getString("message", "[]"));
            message.push({titre: this.titre, description: this.description});
            applicationSettings.setString("message", JSON.stringify(message));
            this.location.back();
        }
    }*/