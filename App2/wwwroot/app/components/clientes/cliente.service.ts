import { Injectable } from '@angular/core';
import { RequestOptionsArgs, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Cliente } from './cliente.model';
import { UtilsService } from '../../services/utils.service';
import { Constants } from '../../constants/constants';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ClienteService {

    constructor(private _http: Http, private utilsService: UtilsService) {
    }

    getList(): Observable<Array<Cliente>> {
        return this._http.get(Constants.serverUrl + 'api/cliente/getList')
            .map((response: Response) => <Cliente[]>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    getClienteById(id: string): Observable<Cliente> {
        return this._http.get(Constants.serverUrl + 'api/cliente/getById/?id=' + id)
            .map((response: Response) => <Cliente>response.json())
            .catch(this.handleError);
    };

    remove(id: string): Observable<boolean> {
        let options: RequestOptionsArgs = {
            body: {
                id: 'asd'
            }
        };

        return this._http.delete(Constants.serverUrl + 'api/cliente/delete', options)
            .map((response: Response) => <boolean>response.json())
            .catch(this.handleError);
    }

    save(cliente: Cliente): Observable<Cliente> {
        if (cliente.id) {
            return this._http.put(Constants.serverUrl + 'api/cliente/update', cliente)
                .map((response: Response) => <Cliente[]>response.json())
                .catch(this.handleError);
        }
        else {
            return this._http.post(Constants.serverUrl + 'api/cliente/insert', cliente)
                .map((response: Response) => <Cliente[]>response.json())
                .catch(this.handleError);
        }
    }
}