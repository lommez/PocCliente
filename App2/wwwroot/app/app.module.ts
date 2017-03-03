import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CpfPipe } from './pipes/cpf.pipe';
import { CnpjPipe } from './pipes/cnpj.pipe';
import { CepPipe } from './pipes/cep.pipe';
import { UtilsService } from './services/utils.service';
import { ClienteService } from './services/cliente.service';

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [AppComponent, CpfPipe, CnpjPipe, CepPipe],
  providers: [UtilsService, ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }