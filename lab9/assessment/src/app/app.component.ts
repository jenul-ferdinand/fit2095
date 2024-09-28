import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PC } from './models/pc';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Title of page 
  title = 'Jenul Ferdinand 33119805';

  // PC List
  PCs : PC[] = [];

  // PC Instance
  PC : PC = new PC();

  // Add PC Method
  addPC() {
    this.PCs.push(this.PC);
    this.PC = new PC();
  }
}

