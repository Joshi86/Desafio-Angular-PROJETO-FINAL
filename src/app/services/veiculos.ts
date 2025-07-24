import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Veiculos {
  private apiUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  getCarroByVin(vin: string) {
    return this.http.post(`${this.apiUrl}/vehicleData`, { vin });
  }

  getCarros() {
    return this.http.get<any[]>(`${this.apiUrl}/vehicleData`);
  }

}
