import { Component } from '@angular/core';
import { ClienteService } from './services/cliente.service';
import { ClienteDto } from './dtos/clienteDto';

@Component({
    selector: 'app-info',
    template: `
        Application loaded!!!
        <p>cnpj {{cnpj | cnpj}}</p>
        <p>cpf {{cpf | cpf}}</p>
        <p>cep {{cep | cep}}</p>
    `
})
export class AppComponent {
    cnpj: string = '01123456000132';
    cpf: string = '03966238675';
    cep: string = '30360112';
    clientesList: Array<ClienteDto>;
    errorMessage: string;

    constructor(private clienteService: ClienteService) {
        clienteService.getList()
            .subscribe(clientes =>
                this.clientesList = clientes,
            error => this.errorMessage = <any>error
            );
    }

    showError() {
        console.log(this.errorMessage);
        console.log(this.clientesList);
    }
}