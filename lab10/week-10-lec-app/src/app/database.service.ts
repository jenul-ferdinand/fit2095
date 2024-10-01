import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = '/api';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};


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
  deleteCar(id:string){
    return this.http.delete(API_URL + '/cars/'+id);
  }
}
