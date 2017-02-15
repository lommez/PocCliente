import { app } from "../app";

export class Routes {
    static defineRoutes() {
        app.config(["$stateProvider", "$urlRouterProvider", ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

            $urlRouterProvider.when('', '/');

            $urlRouterProvider.otherwise("/home");

            $stateProvider.state('home', {
                url: '/',
                templateUrl: 'app/views/home.html',
            });

            $stateProvider.state('clientes', {
                abstract: true,
                url: '/clientes',
                template: '<cliente-index></cliente-index>'
            });

            $stateProvider.state('clientes.list', {
                url: '/list',
                template: '<cliente-index></cliente-index>'
            });

            $stateProvider.state('clientes.edit', {
                url: '/edit/:id',
                views: {
                    '@': {
                        template: '<cliente-edit></cliente-edit>'
                    }
                }
            });

            $stateProvider.state('clientes.delete', {
                url: '/delete/:id',
                views: {
                    '@': {
                        template: '<cliente-delete></cliente-delete>'
                    }
                }
            });

            $stateProvider.state('clientes.create', {
                url: '/novo',
                views: {
                    '@': {
                        template: '<cliente-create></cliente-create>'
                    }
                }
            });
        }]);
    }
}