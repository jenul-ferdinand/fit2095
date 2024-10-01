import { Component } from '@angular/core';
import { Car } from '../models/car';
import { DatabaseService } from '../database.service';
import { OldNewPipe } from '../!PIPES/old-new.pipe';
import { ShortLongModelPipe } from '../!PIPES/short-long-model.pipe';

@Component({
  selector: 'app-list-cars',
  standalone: true,
  imports: [OldNewPipe,ShortLongModelPipe],
  templateUrl: './list-cars.component.html',
  styleUrl: './list-cars.component.css'
})
export class ListCarsComponent {

  fleet:Car[]=[];

  constructor(private db:DatabaseService) { }
  ngOnInit(){
    this.db.getCars().subscribe((data:any)=>{
      this.fleet=data;
    });
  }

}
