import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
    name: 'cnpj'
})
export class CnpjPipe implements PipeTransform{
    transform(value: string): string {        
        let str = value + '';
        str = str.replace(/\D/g, '');
        str = str.replace(/^(\d{2})(\d)/, '$1.$2');
        str = str.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
        str = str.replace(/\.(\d{3})(\d)/, '.$1/$2');
        str = str.replace(/(\d{4})(\d)/, '$1-$2');     
        return str;        
    }
}