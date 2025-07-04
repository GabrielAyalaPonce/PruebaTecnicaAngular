import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // Esto hace que el servicio esté disponible globalmente
})
export class CarService { // Usa PascalCase
  private apiUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json';

  constructor(private http: HttpClient) {}

  getCars(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getCar(country: string, mfr_CommonName: string, mfr_id: number, mfr_name: string): Observable<any> {
    let params = new HttpParams()
      .set('country', country) // Nota: Verifica si la API soporta estos parámetros
      .set('mfr_CommonName', mfr_CommonName)
      .set('mfr_id', mfr_id.toString())
      .set('mfr_name', mfr_name);

    return this.http.get(this.apiUrl, { params });
  }
}