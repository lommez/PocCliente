declare var angular: angular.IAngularStatic;

import { app } from '../../app';
import { ClienteDto } from '../../dtos/clienteDto';
import { ClienteService } from '../../services/clienteService';
import { TipoPessoaEnum } from '../../enums/tipoPessoaEnum';
import { ClienteControllerBase } from './ClienteControllerBase';
import { UtilsService } from '../../services/utilsService';

export class ClienteEditController extends ClienteControllerBase {
    static $inject = ['$stateParams', '$state', 'clienteService', 'utilsService'];

    constructor(private $stateParams: ng.ui.IStateParamsService, $state: ng.ui.IStateService, clienteService: ClienteService, utilsService: UtilsService) {
        super($state, clienteService, utilsService);
        var id: string = $stateParams['id'];

        clienteService.getClienteById(id)
            .then((result) => {
                this.cliente = result;
            });
    }
}

export class ClienteEditComponent implements ng.IComponentOptions {
    templateUrl: string;
    controller: any;
    bindings: any;

    constructor() {
        this.templateUrl = '/app/views/cliente/clienteEdit.html';
        this.controller = ClienteEditController;
    }
}
