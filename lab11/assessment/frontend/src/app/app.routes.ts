import { Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { AudToUsdComponent } from './aud-to-usd/aud-to-usd.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'add', component: AddStudentComponent },
    { path: 'list', component: ListStudentsComponent },
    { path: 'convert', component: AudToUsdComponent},
];
