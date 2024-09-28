import { Component } from '@angular/core';
import { Car } from '../models/car';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-list-cars',
  standalone: true,
  imports: [],
  templateUrl: './list-cars.component.html',
  styleUrl: './list-cars.component.css'
})
export class ListCarsComponent {
  fleet : Car[] = [];

  constructor (private db: DatabaseService) { }

  // Gets cars on initialisation
  ngOnInit() {
    this.db.getCars().subscribe((data:any) => {
      this.fleet = data
    });
  }
}
