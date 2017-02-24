import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CpfPipe } from './pipes/cpf.pipe';
import { CnpjPipe } from './pipes/cnpj.pipe';
import { CepPipe } from './pipes/cep.pipe';
import { ClienteService } from './services/cliente.service';
import { UtilsService } from './services/utils.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, CpfPipe, CnpjPipe, CepPipe, UtilsService, ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }