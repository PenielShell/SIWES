import { Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { SignUpComponent } from './student/sign-up/sign-up.component';
import { SignInComponent } from './student/sign-in/sign-in.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { SignUp1Component } from './institution/staff/sign-up1/sign-up1.component';
import { StaffDashboardComponent } from './institution/staff-dashboard/staff-dashboard.component';
import { SignIn1Component } from './institution/staff/sign-in1/sign-in1.component';
import { StaffComponent } from './institution/staff/staff.component';
import { AuthGuard1 } from './institution/auth/auth.guard1';

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
    },
    {
        path: 'signup1', component: StaffComponent,
        children: [{ path: '', component: SignUp1Component }]
    },
    {
        path: 'login1', component: StaffComponent,
        children: [{ path: '', component: SignIn1Component }]
    },
    {
        path: 'staffDashboard', component: StaffDashboardComponent,canActivate:[AuthGuard1]
    },
    {
        path: '', redirectTo: '/login1', pathMatch: 'full'
    }
];

