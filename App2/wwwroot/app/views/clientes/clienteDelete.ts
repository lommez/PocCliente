// import { app } from "../../app";
// import { ClienteDto } from "../../dtos/clienteDto";
// import { ClienteService } from "../../services/clienteService";
// import { ClienteControllerBase } from './clienteControllerBase';
// import { UtilsService } from '../../services/utilsService';

// class ClienteDeleteController extends ClienteControllerBase {
//     static $inject = ['$stateParams', '$state', 'clienteService', 'utilsService'];    

//     constructor(private $stateParams: ng.ui.IStateParamsService, $state: ng.ui.IStateService, clienteService: ClienteService, utilsService: UtilsService) {
//         super($state, clienteService, utilsService);    

//         var id: string = $stateParams['id'];

//         clienteService.getClienteById(id)
//             .then((result) => {
//                 this.cliente = result;
//             });        
//     }
// }

// export class ClienteDeleteComponent implements ng.IComponentOptions {
//     templateUrl: string;
//     controller: any;
//     bindins: any;

//     constructor() {
//         this.templateUrl = '/app/views/cliente/clienteDelete.html';
//         this.controller = ClienteDeleteController;
//     }
// }