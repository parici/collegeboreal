"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var applicationSettings = require("application-settings");
var DetailComponent = (function () {
    //messageList: Array<Object>;
    function DetailComponent(location) {
        this.location = location;
        this.titre = "";
        this.description = "";
        var messageList = JSON.parse(applicationSettings.getString("message", "[]"));
        this.titre = messageList[0]["titre"];
        this.description = messageList[0]["description"];
    }
    DetailComponent = __decorate([
        core_1.Component({
            selector: "detail",
            templateUrl: "./components/details/details.html",
        }), 
        __metadata('design:paramtypes', [common_1.Location])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=details.component.js.map