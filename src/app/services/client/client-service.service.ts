import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  getCountClients(): Observable<any>{
    return this.http.get(`${this.apiUrl}/v1/clientes/count-client`);
  }

  getClients(page?:number, offset?: number, limit?: number): Observable<any>{
    console.log("Obteniendo clientes por parametros, page: "+page?.toString());
    let httpOptions = {
      headers: new HttpHeaders({

        }
      ), 
      params: new HttpParams()
              .set('page', page?.toString() || "")
              .set('offset', offset?.toString() || "")
              .set('limit', limit?.toString() || "")
    };
    return this.http.get(`${this.apiUrl}/v1/clientes/pagination`, httpOptions);
  }
}
