import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Connector} from "@shared/domain/models";

@Injectable({
    providedIn: 'root',
})
export class DashboardService {
    private http = inject(HttpClient);

    getConnectors() {
        // TODO: adjust URL
        return this.http.get<Connector[]>('connectors');
    }
}