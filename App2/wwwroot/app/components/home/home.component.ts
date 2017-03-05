import { Component } from '@angular/core';

@Component({
    template: `
        HOME
        Application loaded!!!
        <p>cnpj {{cnpj | cnpj}}</p>
        <p>cpf {{cpf | cpf}}</p>
        <p>cep {{cep | cep}}</p>            
    `
})
export class HomeComponent {
    cnpj: string = '01123456000132';
    cpf: string = '03966238675';
    cep: string = '30360112';
}