import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

import { ClienteListComponent } from './components/clientes/cliente-list.component';
import { ClienteCreateComponent } from './components/clientes/cliente-create.component';
import { ClienteEditComponent } from './components/clientes/cliente-edit.component';
import { ClienteDeleteComponent } from './components/clientes/cliente-delete.component';
import { ClienteFormComponent } from './components/clientes/cliente-form.component';

import { CpfPipe } from './pipes/cpf.pipe';
import { CnpjPipe } from './pipes/cnpj.pipe';
import { CepPipe } from './pipes/cep.pipe';

import { UtilsService } from './services/utils.service';
import { ClienteService } from './services/cliente.service';

import { EmailValidator } from './directives/emailValidator.directive';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'clientes', component: ClienteListComponent },
  { path: 'clientes/novo', component: ClienteCreateComponent },
  { path: 'clientes/alterar/:id', component: ClienteEditComponent },
  { path: 'clientes/excluir/:id', component: ClienteDeleteComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ClienteListComponent,
    ClienteCreateComponent,
    ClienteEditComponent,
    ClienteDeleteComponent,
    ClienteFormComponent,
    CpfPipe,
    CnpjPipe,
    CepPipe,
    EmailValidator],
  providers: [UtilsService, ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }