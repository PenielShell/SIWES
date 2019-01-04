import { Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { SignUpComponent } from './student/sign-up/sign-up.component';

export const appRoutes: Routes = [
    {
        path: 'signup', component: StudentComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: '', redirectTo: '/signup', pathMatch: 'full'
    }
];