import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from '../../services/utils.service';
import { ClienteService } from '../../services/cliente.service';
import { ClienteDto } from '../../dtos/clienteDto';

@Component({
    selector: 'cliente-form',
    templateUrl: 'app/components/clientes/cliente-form.component.html'
})
export class ClienteFormComponent implements OnInit, AfterViewInit {
    cliente: ClienteDto;
    errorMessage: string;
    tipoPessoaOptions: Array<any>;
    @ViewChild('clienteForm') form: NgForm;

    constructor(private route: ActivatedRoute, private clienteService: ClienteService, private utilsService: UtilsService) {
    }

    ngOnInit() {
        this.buildTipoPessoaOptions();

        let id = this.route.snapshot.params['id'];
        this.clienteService
            .getClienteById(id)
            .subscribe((cliente: ClienteDto) => {
                if (cliente) {
                    this.cliente = cliente;
                }
            }, (error) => {
                this.errorMessage = error;
            });
    }

    ngAfterViewInit() {
        console.log(this.form);
    }

    buildTipoPessoaOptions() {
        this.tipoPessoaOptions = new Array<any>();
        this.tipoPessoaOptions.push({ key: 1, value: 'Física' });
        this.tipoPessoaOptions.push({ key: 2, value: 'Jurídica' });
    };

    save() {

    }

    goBackToIndex() {

    }

    onChangeTipoPessoa() {

    }

    addPhone() {
    }

    deletePhone() {

    }

    teste() {
        let emailControl = this.form.controls['email'];
        console.log(emailControl);
    }
}