import { ClienteDto } from '../dtos/clienteDto';
import { TipoPessoaEnum } from '../enums/tipoPessoaEnum';
import { UtilsService } from '../services/utilsService';
import { Constants } from '../constants/constants';

export class ClienteService {
    static $inject = ['$http', '$q', 'utilsService'];

    private data: Array<ClienteDto>;

    constructor(private $http: ng.IHttpService, private $q: ng.IQService, private utilsService: UtilsService) {
    }

    getList(): ng.IPromise<Array<ClienteDto>> {
        var deferred = this.$q.defer();

        this.$http.get<Array<ClienteDto>>(Constants.serverUrl + 'api/cliente/getList')
            .then((result) => {
                deferred.resolve(result.data);
            })
            .catch((error) => {
                deferred.reject(error);
            });

        return deferred.promise;
    }

    getClienteById(id: string): ng.IPromise<ClienteDto> {
        var deferred = this.$q.defer();

        this.$http.get<ClienteDto>(Constants.serverUrl + 'api/cliente/getById?id=' + id)
            .then((result) => {
                deferred.resolve(result.data);
            })
            .catch((error) => {
                deferred.reject(error);
            });

        return deferred.promise;
    };

    remove(id: string): ng.IPromise<boolean> {
        var deferred = this.$q.defer();

        var config: angular.IRequestShortcutConfig = {
            data: {
                id: id
            },
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            }
        }

        this.$http.delete<boolean>(Constants.serverUrl + 'api/cliente/delete', config)
            .then((result) => {
                deferred.resolve(result.data);
            })
            .catch((error) => {
                deferred.reject(error);
            });

        return deferred.promise;
    };

    save(cliente: ClienteDto): ng.IPromise<ClienteDto> {
        var deferred = this.$q.defer();

        if (cliente.id == undefined || cliente.id == '') {
            this.$http.post<ClienteDto>(Constants.serverUrl + 'api/cliente/insert', cliente)
                .then((result) => {
                    deferred.resolve(result.data);
                })
                .catch((error) => {
                    deferred.reject(error);
                });
        }
        else {
            this.$http.put<ClienteDto>(Constants.serverUrl + 'api/cliente/update', cliente)
                .then((result) => {
                    deferred.resolve(result.data);
                })
                .catch((error) => {
                    deferred.reject(error);
                });
        }

        return deferred.promise;
    }
}