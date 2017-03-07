import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { ClienteService } from '../../services/cliente.service';
import { ClienteBaseComponent } from './cliente-base.component';

@Component({
    templateUrl: 'app/components/clientes/cliente-delete.component.html'
})
export class ClienteDeleteComponent extends ClienteBaseComponent implements OnInit {
    constructor(router: Router, route: ActivatedRoute, clienteService: ClienteService, utilsService: UtilsService) {
        super(router, route, clienteService, utilsService);        
    }

    ngOnInit() {
         this.init();
    }
}