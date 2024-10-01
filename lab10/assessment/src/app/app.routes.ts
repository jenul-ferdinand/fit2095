import { Routes } from '@angular/router';
import { ListStudentComponent } from './list-student/list-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path: 'list-students', component: ListStudentComponent},
    {path: 'add-student', component: AddStudentComponent},
    {path: 'delete-student', component: DeleteStudentComponent},
    {path: '', component: DashboardComponent},
    //{path: '**', component: DashboardComponent},
];
