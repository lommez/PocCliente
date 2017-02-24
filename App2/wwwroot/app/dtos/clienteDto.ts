import { TipoPessoaEnum } from '../enums/tipoPessoaEnum';

export class ClienteDto {
    id: string;
    nome: string;
    tipoPessoa: TipoPessoaEnum;
    documento: string;
    email: string;
    telefones: Array<string>;
}