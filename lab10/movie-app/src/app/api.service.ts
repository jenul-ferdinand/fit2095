import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getActors() {
    return this.http.get('/actors');
  }

  createActor(data: object) {
    return this.http.post('/actors/new', data, httpOptions)
  }

  deleteActor(id: string) {
    return this.http.delete(`/actors/${id}`, httpOptions);
  }
}
