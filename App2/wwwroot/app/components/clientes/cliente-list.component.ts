import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { ClienteDto } from '../../dtos/clienteDto';

@Component({
    templateUrl: 'app/components/clientes/cliente-list.component.html'
})
export class ClienteListComponent implements OnInit {
    clientesList: Array<ClienteDto>;
    errorMessage: string;

    constructor(private clienteService: ClienteService) {
    }

    ngOnInit() {
        this.getList();
    }

    getList() {
        this.clienteService
            .getList()
            .subscribe(clientes => {
                this.clientesList = clientes;
            }, error => {
                this.errorMessage = <any>error;
            });
    }
}