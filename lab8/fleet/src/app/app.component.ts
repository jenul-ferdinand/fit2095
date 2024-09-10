import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // App title
  title = 'fleet';

  // Stores the fleet of Car objects
  fleet : Car[] = [];

  // Create a car
  car = new Car();

  // Function to add a car
  addCar() {
    this.fleet.push(this.car);
    this.car = new Car(); // Create a new instance for the following car
  }
}

// Represents a Car
class Car {
  maker: string;
  model: string;
  year: number;

  constructor() {
    this.maker = '';
    this.model = '';
    this.year = 2023;
  }
}