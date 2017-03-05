import { Component } from '@angular/core';

@Component({
    selector: 'app-info',
    template: `
        <header></header>
        <div class="container body-content" style="margin: 50px;">
            <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent {
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

    // this.clienteService.remove('58b9bac89cb4412ce0d240e7')
    //     .subscribe(result =>
    //         () => {
    //             console.log(result);
    //         },
    //     error => this.errorMessage = <any>error
    //     );
}