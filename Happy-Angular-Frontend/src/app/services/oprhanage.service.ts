import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
import { Orphanage } from '../interfaces/orphanage.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class OprhanageService {

    private _backendURL = 'http://localhost:3000/api/v1/';

    private _httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(
        private _http: HttpClient
    ) { }

    public getAllOrphanages(): Observable<Orphanage[]> {
        return this._http.get<Orphanage[]>(this._backendURL + 'orphanages')
            .pipe(
                retry(3),
                map((object: any) => object.orphanages),
                catchError(this.handleError)
            );
    }

    public storeOrphanage(orphanage: Orphanage): Observable<Orphanage> {
        return this._http.post<Orphanage>(this._backendURL + 'orphanages', JSON.stringify(orphanage), this._httpOptions)
            .pipe(
                retry(3),
                catchError(this.handleError)
            );
    }

    private handleError(error: any): Observable<never> {
        const errorMessage = error.error instanceof ErrorEvent
            ? error.error.message
            : `Error Code: ${error.status}
               Message: ${error.message}`;

        // window.alert(errorMessage);
        return throwError(errorMessage);
    }
}
