import { TipoPessoaEnum } from '../enums/tipoPessoaEnum';

export class Cliente {
    id: string;
    nome: string;
    tipoPessoa: TipoPessoaEnum;
    documento: string;
    email: string;
    telefones: Array<string>;

    isPessoaFisica(): boolean {
        return this.tipoPessoa === TipoPessoaEnum.fisica;
    }

    isPessoaJuridica(): boolean {
        return this.tipoPessoa === TipoPessoaEnum.juridica;
    }
}