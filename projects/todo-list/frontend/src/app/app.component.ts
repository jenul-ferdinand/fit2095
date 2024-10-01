import { TUI_DARK_MODE, TuiButton, TuiLabel, TuiRoot, TuiTextfield } from "@taiga-ui/core";
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiSwitch } from '@taiga-ui/kit';

// Import Task Interface
import { Task } from '../models/task.model';
import { HeaderComponent } from "./header/header.component";
import { AddTaskComponent } from "./add-task/add-task.component";

//! App Component
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    TuiRoot,
    TuiButton,
    ReactiveFormsModule,
    TuiTextfield,
    TuiLabel,
    TuiSwitch,
    HeaderComponent,
    AddTaskComponent
],
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

    //this.getTasks();
  }

  
}
