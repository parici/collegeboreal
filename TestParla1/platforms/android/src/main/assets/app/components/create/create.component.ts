import {Component} from "@angular/core";
import {Location} from "@angular/common";

import * as applicationSettings from "application-settings";

@Component({
    selector: "create",
    templateUrl: "./Component/create/create.html",
})
export class CreateComponent {
    private location: Location;
    public personList: Array<Object>;
    public firstname: string;
    public lastname: string

    constructor(location: Location){
        this.location = location;
        //this.personList = JSON.parse(applicationSettings.getString("people", "[]"));
        this.firstname ="";
        this.lastname ="";
}
 /*   save(){
        if(this.firstname !="" && this.lastname !=""){
            this.personList.push({firstname: this.firstname, lastname: this.lastname});
            ApplicationSettings.setString("people", JSON.stringify(this.personList))
            this.location.back();*/

            save() {
    if(this.firstname != "" && this.lastname != "") {
        var people: Array<Object> = JSON.parse(applicationSettings.getString("people", "[]"));
        people.push({firstname: this.firstname, lastname: this.lastname});
        applicationSettings.setString("people", JSON.stringify(people));
        this.location.back();
    }
}
}