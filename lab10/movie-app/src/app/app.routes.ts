import { Routes } from '@angular/router';
import { ListActorsComponent } from './list-actors/list-actors.component';
import { AddActorComponent } from './add-actor/add-actor.component';
import { DeleteActorComponent } from './delete-actor/delete-actor.component';

export const routes: Routes = [
    { path: 'list-actors', component: ListActorsComponent },
    { path: 'add-actor', component: AddActorComponent },
    { path: 'delete-actor', component: DeleteActorComponent },
    { path: '', redirectTo: '/list-actors', pathMatch: 'full' },
    { path: '**', component: ListActorsComponent },
];
