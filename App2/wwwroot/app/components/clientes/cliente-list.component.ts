import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';

@Component({
    templateUrl: 'app/components/clientes/cliente-list.component.html'
})
export class ClienteListComponent implements OnInit {
    clientesList: Array<Cliente>;
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