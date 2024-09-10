import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private api_url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  // GET .../ Testing server connection
  getMessage() {
    return this.http.get(`${this.api_url}/`);
  }

  // GET .../api/tasks Get All Tasks
  getTasks() { 
    return this.http.get(`${this.api_url}/api/tasks/`);
  }

  // POST .../api/tasks/
  createTask(task : Task) {
    return this.http.post(`${this.api_url}/api/tasks/`, task);
  }

  // PUT .../api/tasks/:id
  updateTask(id : string) {
    return this.http.put(`${this.api_url}/api/tasks/${id}`, {});
  }

  // DELETE .../api/tasks/:id
  deleteTask(id : string) {
    return this.http.delete(`${this.api_url}/api/tasks/${id}`);
  }
}
