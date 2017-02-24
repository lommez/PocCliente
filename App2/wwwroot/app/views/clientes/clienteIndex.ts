// import { app } from "../../app";
// import { ClienteDto } from "../../dtos/clienteDto";
// import { ClienteService } from "../../services/clienteService";


// class ClienteIndexController {
//     static $inject = ['clienteService', '$state'];

//     clientes: Array<ClienteDto>;

//     constructor(private clienteService: ClienteService, private $state: ng.ui.IStateService) {
//         clienteService.getList().then((result) =>{
//             this.clientes = result;
//         });
//     }

//     edit(id: number) {
//         this.$state.go('clientes.edit', { id: id });
//     }
// }

// export class ClienteIndexComponent implements ng.IComponentOptions {
//     templateUrl: string;
//     controller: any;
//     bindings: any;

//     constructor() {
//         this.templateUrl = '/app/views/cliente/clienteList.html';
//         this.controller = ClienteIndexController;
//     }
// }