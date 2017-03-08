import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente.model';
import { ClienteService } from './cliente.service';

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