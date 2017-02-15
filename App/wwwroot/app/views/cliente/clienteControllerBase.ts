declare var angular: angular.IAngularStatic;

import { ClienteDto } from '../../dtos/clienteDto';
import { TipoPessoaEnum } from '../../enums/tipoPessoaEnum';
import { ClienteService } from '../../services/clienteService';
import { UtilsService } from '../../services/utilsService';

export class ClienteControllerBase {
    cliente: ClienteDto;
    novoTelefone: string;
    form: ng.IFormController;
    tipoPessoaOptions: Array<any>;
    exibirValidacao: boolean;

    constructor(private $state: ng.ui.IStateService, private clienteService: ClienteService, public utilsService: UtilsService) {
    }

    $onInit() {
        this.buildTipoPessoaOptions();
        this.exibirValidacao = false;
    }

    buildTipoPessoaOptions() {
        this.tipoPessoaOptions = new Array<any>();
        this.tipoPessoaOptions.push({ key: 1, value: 'Física' });
        this.tipoPessoaOptions.push({ key: 2, value: 'Jurídica' });
    };

    initializeForm(form: ng.IFormController) {
        this.form = form;

        if (!angular.isDefined(this.cliente) || this.cliente == null) {
            this.cliente = new ClienteDto();
            this.cliente.tipoPessoa = TipoPessoaEnum.fisica;
        }
    }

    onChangeTipoPessoa() {
        this.cliente.documento = '';
    }

    save() {
        if (this.form.$valid) {
            this.clienteService.save(this.cliente)
                .then((result) => {
                    this.goToIndex();
                })
                .catch((error) => {
                    alert(error.data.message);
                });
        }
    }

    remove() {
        this.clienteService.remove(this.cliente.id)
            .then((result) => {
                if (result) {
                    this.goToIndex();
                }
            });
    }

    deletePhone(telefone: string) {
        var index = this.cliente.telefones.indexOf(telefone);

        if (index >= 0) {
            this.cliente.telefones.splice(index, 1);
        }
    }

    addPhone() {
        if (this.cliente.telefones == undefined) {
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

    goToIndex() {
        this.$state.go('clientes.list');
    }
}