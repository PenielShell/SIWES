import { Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { SignUpComponent } from './student/sign-up/sign-up.component';
import { SignInComponent } from './student/sign-in/sign-in.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
    {
        path: 'signup', component: StudentComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: StudentComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'studentDashboard', component: StudentDashboardComponent,canActivate:[AuthGuard]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];