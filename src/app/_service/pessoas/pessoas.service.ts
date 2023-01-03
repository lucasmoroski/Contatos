import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class PessoasService {
    constructor(
        private httpClient: HttpClient,
    ) { }

    listarPessoas(model: any): Observable<any> {
        if (model == null) {
            model = {};
        }
        const httpOptions = {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                // 'Authorization': `Bearer ${}`
            }),
            params: new HttpParams({ fromObject: model })
        };
        return this.httpClient.get(`${environment.URLS.API_PESSOAS}/Pessoa/GetListPessoas`, httpOptions).pipe(catchError(this.handleError.bind(this)));
    }

    cadastrarPessoa(model: any): Observable<any> {
        if (model == null) {
            model = {};
        }
        const httpOptions = {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
            }),
        };
        return this.httpClient.post(`${environment.URLS.API_PESSOAS}/Pessoa/UpdatePessoa`, model, httpOptions).pipe(catchError(this.handleError.bind(this)));
    }

    atualizarPessoa(model: any): Observable<any> {
        if (model == null) {
            model = {};
        }
        const httpOptions = {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
            }),
        };
        return this.httpClient.put(`${environment.URLS.API_PESSOAS}/Pessoa/UpdatePessoa`, model, httpOptions).pipe(catchError(this.handleError.bind(this)));
    }

    private handleError(errorResponse: HttpErrorResponse) {
        let msg = "";
        if (errorResponse.error instanceof ErrorEvent) {
            msg = errorResponse.error.message;
        } else {
            if (errorResponse.error['errorMessages']) {
                if (errorResponse.error != null && errorResponse.error.errorMessages.length > 0)
                    errorResponse.error.errorMessages.forEach((element: { message: string; }) => {
                        msg += element.message + " ";
                    });
            } else {
                msg = "Há um problema com o serviço. Somos notificados e estamos trabalhando nele. Tente novamente mais tarde.";
            }
        }
        if (msg === "")
            msg = "Há um problema com o serviço. Somos notificados e estamos trabalhando nele. Tente novamente mais tarde.";
        return msg;
    }
}