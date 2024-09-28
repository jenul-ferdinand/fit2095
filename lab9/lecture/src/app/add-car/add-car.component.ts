import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Model Imports
import { Car } from '../models/car';

// Service Imports
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css'
})
export class AddCarComponent {
  car: Car = new Car();

  constructor (private db: DatabaseService, private router: Router) { }

  addCar() {
    this.db.createCar(this.car).subscribe((data: any) => {
      console.log(data);

      // Navigate to the List cars route
      this.router.navigate(['list-cars']);
    });
  }
}
