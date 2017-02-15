declare var angular: angular.IAngularStatic;

export var app = angular.module('app', ['ui.router']);

// app.config(["$locationProvider", function ($locationProvider) {
//     $locationProvider.html5Mode({
//         enabled: true,
//         requireBase: false
//     });
// }]);

// constants
import { Constants } from "./constants/constants";

// controllers
import { MainController } from './controllers/mainController';

// components
import { HeaderComponent } from "./components/header/header";
import { ClienteIndexComponent } from "./views/cliente/clienteIndex";
import { ClienteCreateComponent } from "./views/cliente/clienteCreate";
import { ClienteEditComponent } from "./views/cliente/clienteEdit";
import { ClienteDeleteComponent } from "./views/cliente/clienteDelete";

// filters
import { CepFilter } from "./filters/cepFilter";
import { CnpjFilter } from "./filters/cnpjFilter";
import { CpfFilter } from "./filters/cpfFilter";

// directives
import { ConvertToNumber } from './directives/convertToNumber';

// services
import { UtilsService } from "./services/utilsService";
import { ClienteService } from "./services/clienteService";

// routes
import { Routes } from "./routes/routes";

// controllers
app.controller('main', MainController);

// components
app.component('header', new HeaderComponent());
app.component('clienteIndex', new ClienteIndexComponent());
app.component('clienteCreate', new ClienteCreateComponent());
app.component('clienteEdit', new ClienteEditComponent());
app.component('clienteDelete', new ClienteDeleteComponent());

// filtros
app.filter('cep', CepFilter)
app.filter('cnpj', CnpjFilter);
app.filter('cpf', CpfFilter);

// directives
app.directive('convertToNumber', ConvertToNumber.factory());

// services
app.service('utilsService', UtilsService);
app.service('clienteService', ClienteService);

// constants
app.constant('titulo', Constants.titulo);

// routes
Routes.defineRoutes();