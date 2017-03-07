import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from '../../services/utils.service';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';
import { TipoPessoaEnum } from '../../enums/tipoPessoaEnum';

export class ClienteBaseComponent {
    cliente: Cliente;
    errorMessage: string;
    novoTelefone: string;
    tipoPessoaOptions: Array<any>;
    @ViewChild('clienteForm') form: NgForm;

    constructor(
        public router: Router,
        public route: ActivatedRoute,
        public clienteService: ClienteService,
        public utilsService: UtilsService) {
    }

    init() {
        this.buildTipoPessoaOptions();

        let id = this.route.snapshot.params['id'];

        if (id) {
            this.clienteService
                .getClienteById(id)
                .subscribe((cliente: Cliente) => {
                    if (cliente) {
                        this.cliente = cliente;
                    }
                }, (error) => {
                    this.errorMessage = error;
                });
        }
        else {
            this.cliente = new Cliente();
            this.cliente.tipoPessoa = TipoPessoaEnum.fisica;
        }
    }

    buildTipoPessoaOptions() {
        this.tipoPessoaOptions = new Array<any>();
        this.tipoPessoaOptions.push({ key: 1, value: 'Física' });
        this.tipoPessoaOptions.push({ key: 2, value: 'Jurídica' });
    };

    save(form: NgForm) {
        if (form.valid) {
            this.clienteService.save(this.cliente)
                .subscribe((cliente) => {
                    if (cliente) {
                        this.goBackToIndex();
                    }
                }, (error) => {
                    this.errorMessage = error;
                    console.log(this.errorMessage);
                });
        }
    }

    remove(id: string) {
        this.clienteService.remove(id)
            .subscribe((response) => {
                if (response) {
                    this.goBackToIndex();
                }
            }, (error) => {
                this.errorMessage = error;
                console.log(this.errorMessage);
            });
    }

    addPhone() {
        if (this.cliente.telefones === undefined) {
            this.cliente.telefones = new Array<string>();
        }

        var index = this.cliente.telefones.indexOf(this.novoTelefone);

        if (index >= 0) {
            alert('Já existe um telefone com esse número.');
            return;
        }

        this.cliente.telefones.push(this.novoTelefone);
        this.novoTelefone = '';
    }

    deletePhone(telefone: string) {
        var index = this.cliente.telefones.indexOf(telefone);

        if (index >= 0) {
            this.cliente.telefones.splice(index, 1);
        }
    }

    goBackToIndex() {
        this.router.navigate(['/clientes']);
    }

    onChangeTipoPessoa() {
        this.cliente.documento = '';
    }
}