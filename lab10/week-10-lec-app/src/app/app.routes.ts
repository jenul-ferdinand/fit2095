import { Routes } from '@angular/router';
import { AddCarComponent } from './add-car/add-car.component';
import { ListCarsComponent } from './list-cars/list-cars.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SocketChatComponent } from './socket-chat/socket-chat.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'add-car', component: AddCarComponent },
    { path: 'list-cars', component: ListCarsComponent },
    { path: 'socket-chat', component: SocketChatComponent }
];
