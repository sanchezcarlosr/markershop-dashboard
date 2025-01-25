import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  getCountSales():Observable<any>{
    return this.http.get(`${this.apiUrl}/v1/ventas/count-ventas`);
  }
}
