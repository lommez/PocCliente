import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
    name: 'cep'
})
export class CepPipe implements PipeTransform{
    transform(value: string): string {        
        let str = value + '';
        str = str.replace(/\D/g, '');
        str = str.replace(/^(\d{2})(\d{3})(\d)/, '$1.$2-$3');        
        return str;        
    }
}