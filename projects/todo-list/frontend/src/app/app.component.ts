import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';

// Import Task Interface
import { Task } from '../models/task.model';

//! App Component
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  providers:[ApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

//! CLASS
export class AppComponent implements OnInit {
  message: string = '';
  title: string = 'Testing Backend Connection';
  task_title: string = '';
  tasks : Task[] = []; 

  constructor (private apiService: ApiService) { }

  // * Back End Connection Test
  ngOnInit() {
    this.apiService.getMessage().subscribe(
      (data : any) => { this.message = data.msg; },  
      (error : any) => { console.error('An error occurred', error); }
    );

    this.getTasks();
  }

  // * Create a Task
  createTask(name: string) {
    // Create the Task object
    let task: Task = {
      title: name,
      completed: false  // Assuming a new task is incomplete by default
    };
  
    // kAdd the task to the local tasks array
    this.tasks.push(task);
  
    // Send the task to the backend API for persistence
    this.apiService.createTask(task).subscribe(
      (response: any) => { console.log('Task successfully created:', response); },
      (error: any) => { console.error('Error creating task:', error); }
    );
  }

  // * Get All Tasks
  getTasks() {
    this.apiService.getTasks().subscribe(
      (data: any) => { 
        console.log('Successfully fetched all tasks from DB:', data);
        this.tasks = data;
      },
      (error: any) => { console.error(error) }
    )
  }

  // TODO Delete a Task
  deleteTask() {
    
  }
}
