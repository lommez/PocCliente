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
}