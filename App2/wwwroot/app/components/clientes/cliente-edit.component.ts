import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { ClienteService } from '../../services/cliente.service';

@Component({
    templateUrl: 'app/components/clientes/cliente-edit.component.html'
})
export class ClienteEditComponent implements OnInit {
    constructor(private clienteService: ClienteService, private utilsService: UtilsService) {

    }

    ngOnInit() {

    }
}