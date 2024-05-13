import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Connector} from "@shared/domain/models";
import {Observable} from "rxjs";
import {environment} from "@environments/environment";

@Injectable({
    providedIn: 'root',
})
export class ConnectorService {
    private http = inject(HttpClient);

    getConnectors(): Observable<Connector[]> {
        // TODO: adjust URL
        return this.http.get<Connector[]>(`${environment.server}/services/management/connector`);
    }
}