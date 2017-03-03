import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
    cnpj: string = '01123456000132';
    cpf: string = '03966238675';
    cep: string = '30360112';
    clientesList: Array<ClienteDto>;
    cliente: ClienteDto;
    errorMessage: string;

    constructor(private clienteService: ClienteService) {
    }

    ngOnInit() {
        this.clienteService.getList()
            .subscribe(clientes =>
                this.clientesList = clientes,
            error => this.errorMessage = <any>error
            );

        // this.clienteService.getClienteById('58b9bac89cb4412ce0d240e7')
        //     .subscribe(cliente =>
        //         () => {
        //             if (cliente) {
        //                 this.cliente = cliente;
        //                 console.log(cliente);
        //             }
        //         },
        //     error => this.errorMessage = <any>error
        //     );

        this.clienteService.remove('58b9bac89cb4412ce0d240e7')
            .subscribe(result =>
                () => {
                    console.log(result);
                },
            error => this.errorMessage = <any>error
            );
    }
}