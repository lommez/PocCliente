import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: 'app/components/header/header.component.html'
})
export class HeaderComponent implements OnInit {

    ngOnInit() {
        console.log('*** HEADER ***');
    }
}