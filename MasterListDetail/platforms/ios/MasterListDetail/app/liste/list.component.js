"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var applicationSettings = require("application-settings");
var ListComponent = (function () {
    function ListComponent(router, location) {
        var _this = this;
        this.router = router;
        this.messageList = JSON.parse(applicationSettings.getString("messageList", "[]"));
        this.messageList.push({ titre: 'titre 1', description: 'description 1' });
        this.messageList.push({ titre: 'titre 2', description: 'description 2' });
        //this.personList = JSON.parse(applicationSettings.getString("message", this.messageList));
        location.subscribe(function (path) {
            _this.messageList = JSON.parse(applicationSettings.getString("messageList", "[]"));
            _this.messageList.push({ titre: 'titre 1', description: 'description 1' });
            _this.messageList.push({ titre: 'titre 2', description: 'description 2' });
        });
    }
    ListComponent.prototype.detail = function (pArg) {
        alert("le bouton liste marche");
        alert(pArg);
        var link = ['/details'];
        this.router.navigate(link);
        applicationSettings.setString("message", pArg);
        //this.router.navigate(['/details']);
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: "list",
            templateUrl: "./liste/list.html",
        }), 
        __metadata('design:paramtypes', [router_1.Router, common_1.Location])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map