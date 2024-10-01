import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { Task } from '../../models/task.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiButton, TuiLabel, TuiRoot, TuiTextfield } from '@taiga-ui/core';
import { TuiSwitch } from '@taiga-ui/kit';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    FormsModule,
    TuiRoot,
    TuiButton,
    TuiTextfield,
    TuiLabel,
    TuiSwitch,
    HeaderComponent
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  task_title : string = '';
  tasks : Task[] = [];

  constructor (private apiService: ApiService) { }

  // * Create a Task
  createTask(name: string) {
    // Create the Task object
    let task: Task = {
      title: name,
      completed: false
    };
  
    // Add the task to the local tasks array
    this.tasks.push(task);
  
    // Send the task to the backend API for persistence
    this.apiService.createTask(task).subscribe(
      (response: any) => { console.log('Task successfully created:', response); },
      (error: any) => { console.error('Error creating task:', error); }
    );
  }

  // // * Get All Tasks
  // getTasks() {
  //   this.apiService.getTasks().subscribe(
  //     (data: any) => { 
  //       console.log('Successfully fetched all tasks from DB:', data);
  //       this.tasks = data;
  //     },
  //     (error: any) => { console.error(error) }
  //   )
  // }

  // // TODO Delete a Task
  // deleteTask() {
    
  // }
}
