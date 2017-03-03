import { Injectable } from '@angular/core';
import { RequestOptionsArgs, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ClienteDto } from '../dtos/clienteDto';
import { UtilsService } from '../services/utils.service';
import { Constants } from '../constants/constants';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ClienteService {

    constructor(private _http: Http, private utilsService: UtilsService) {
    }

    getList(): Observable<Array<ClienteDto>> {
        return this._http.get(Constants.serverUrl + 'api/cliente/getList')
            .map((response: Response) => <ClienteDto[]>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    getClienteById(id: string): Observable<ClienteDto> {
        return this._http.get(Constants.serverUrl + 'api/cliente/getById/?id=' + id)
            .map((response: Response) => <ClienteDto>response.json())
            .catch(this.handleError);
    };

    remove(id: string): Observable<boolean> {
        let options: RequestOptionsArgs = {
            body : {
                id: id
            }
        };

        return this._http.delete(Constants.serverUrl + 'api/cliente/delete', options)
            .map((response: Response) => <boolean>response.json())
            .catch(this.handleError);
    }

    // remove(id: string): ng.IPromise<boolean> {
    //     var deferred = this.$q.defer();

    //     var config: angular.IRequestShortcutConfig = {
    //         data: {
    //             id: id
    //         },
    //         headers: {
    //             'Content-type': 'application/json;charset=utf-8'
    //         }
    //     }

    //     this.$http.delete<boolean>(Constants.serverUrl + 'api/cliente/delete', config)
    //         .then((result) => {
    //             deferred.resolve(result.data);
    //         })
    //         .catch((error) => {
    //             deferred.reject(error);
    //         });

    //     return deferred.promise;
    // };

    // save(cliente: ClienteDto): ng.IPromise<ClienteDto> {
    //     var deferred = this.$q.defer();

    //     if (cliente.id == undefined || cliente.id == '') {
    //         this.$http.post<ClienteDto>(Constants.serverUrl + 'api/cliente/insert', cliente)
    //             .then((result) => {
    //                 deferred.resolve(result.data);
    //             })
    //             .catch((error) => {
    //                 deferred.reject(error);
    //             });
    //     }
    //     else {
    //         this.$http.put<ClienteDto>(Constants.serverUrl + 'api/cliente/update', cliente)
    //             .then((result) => {
    //                 deferred.resolve(result.data);
    //             })
    //             .catch((error) => {
    //                 deferred.reject(error);
    //             });
    //     }

    //     return deferred.promise;
    // }
}