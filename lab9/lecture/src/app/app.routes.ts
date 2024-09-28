import { Routes } from '@angular/router';

// Components
import { AddCarComponent } from './add-car/add-car.component';
import { ListCarsComponent } from './list-cars/list-cars.component';

// These are our frontend routes
export const routes: Routes = [
    {path: 'add-car', component: AddCarComponent},
    {path: 'list-cars', component: ListCarsComponent},
];
