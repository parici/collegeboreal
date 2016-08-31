"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var applicationSettings = require("application-settings");
var CreateComponent = (function () {
    function CreateComponent(location) {
        this.location = location;
        //this.personList = JSON.parse(applicationSettings.getString("people", "[]"));
        this.firstname = "";
        this.lastname = "";
    }
    /*   save(){
           if(this.firstname !="" && this.lastname !=""){
               this.personList.push({firstname: this.firstname, lastname: this.lastname});
               ApplicationSettings.setString("people", JSON.stringify(this.personList))
               this.location.back();*/
    CreateComponent.prototype.save = function () {
        if (this.firstname != "" && this.lastname != "") {
            var people = JSON.parse(applicationSettings.getString("people", "[]"));
            people.push({ firstname: this.firstname, lastname: this.lastname });
            applicationSettings.setString("people", JSON.stringify(people));
            this.location.back();
        }
    };
    CreateComponent = __decorate([
        core_1.Component({
            selector: "create",
            templateUrl: "./Component/create/create.html",
        }), 
        __metadata('design:paramtypes', [common_1.Location])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=create.component.js.map