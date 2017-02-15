import { app } from "../../app";

class HeaderController {

}

export class HeaderComponent implements ng.IComponentOptions {
    templateUrl: string;
    controller: any;
    bindings: any;

    constructor() {
        this.templateUrl = '/app/components/header/header.html';
        this.controller = HeaderController;
        this.bindings = {
            titulo: '@'
        }
    }
}