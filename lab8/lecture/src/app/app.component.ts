import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Week 8 Angular Development';
  age = 20;
  randInt = 0;
  fullName = '';
  studentNames : Array<String> = []

  getNewRandomInt(max : number) {
    this.randInt = Math.round(Math.random() * max);
  }

  addNameToArray() {
    this.studentNames.push(this.fullName);
    this.fullName = '';
  }
}
