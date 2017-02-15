import { app } from "../../app";
import { ClienteDto } from "../../dtos/clienteDto";
import { ClienteService } from "../../services/clienteService";
import { ClienteControllerBase } from './clienteControllerBase';
import { UtilsService } from '../../services/utilsService';

class ClienteCreateController extends ClienteControllerBase {
    static $inject = ['$stateParams', '$state', 'clienteService', 'utilsService'];    

    constructor(private $stateParams: ng.ui.IStateParamsService, $state: ng.ui.IStateService, clienteService: ClienteService, utilsService: UtilsService) {
        super($state, clienteService, utilsService);
        var id = $stateParams['id'];
    }
}

export class ClienteCreateComponent implements ng.IComponentOptions {
    templateUrl: string;
    controller: any;
    bindings: any;

    constructor() {
        this.templateUrl = '/app/views/cliente/clienteCreate.html';
        this.controller = ClienteCreateController;
    }
}