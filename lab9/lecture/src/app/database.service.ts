import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Backend API URL
const API_URL = 'http://localhost:8080/api';

// Options to force JSON
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private http: HttpClient) { }

  createCar(car: any) {
    return this.http.post(API_URL + '/cars', car, httpOptions);
  }

  getCars() {
    return this.http.get(API_URL + '/cars');
  }

  deleteCars(id: string) {
    return this.http.delete(API_URL + '/cars/' + id);
  }
}
