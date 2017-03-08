import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilsService } from '../../services/utils.service';
import { ClienteBaseComponent } from './cliente-base.component';
import { ClienteService } from './cliente.service';

@Component({
    selector: 'cliente-form',
    templateUrl: 'app/components/clientes/cliente-form.component.html'
})
export class ClienteFormComponent extends ClienteBaseComponent implements OnInit {
    constructor(router: Router, route: ActivatedRoute, clienteService: ClienteService, utilsService: UtilsService) {
        super(router, route, clienteService, utilsService);
    }

    ngOnInit() {
        this.init();
    }
}