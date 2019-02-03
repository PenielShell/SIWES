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
import { AuthGuard2 } from './institution/auth2/auth.guard2';
import {HomeComponent} from "./institution/staff-dashboard/pages/home/home.component";
import {ReportComponent} from "./student-dashboard/pages/report/report.component";
import {EvaluateComponent} from "./student-dashboard/pages/evaluate/evaluate.component";
import {Home1Component} from "./student-dashboard/pages/home1/home1.component";
import { FormaComponent } from './forma/forma.component';
import { FormbComponent } from './formb/formb.component';
import { IsupDashboardComponent } from './institution/isup-dashboard/isup-dashboard.component';
import { IsupComponent } from './institution/isup/isup.component';
import { SignUp2Component } from './institution/isup/sign-up2/sign-up2.component';
import { SignIn2Component } from './institution/isup/sign-in2/sign-in2.component';




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
        path: 'studentDashboard', component: StudentDashboardComponent,canActivate:[AuthGuard],
            children: [
            {path: '', redirectTo: 'home1', pathMatch: 'full'},
                    { path: 'home1', component: Home1Component,
                            children:[
                                { path: 'forma', component: FormaComponent},
                                { path: 'formb', component: FormbComponent},
                            ]
                        },
            
            {path: 'others1',loadChildren:'./student-dashboard/pages/others/others1.module#OthersModule1'},
            { path: 'report', component: ReportComponent},
            { path: 'evaluate', component: EvaluateComponent},
            
            
                
        ]
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
        path: 'staffDashboard',
         component: StaffDashboardComponent,
         canActivate:[AuthGuard1],
                children: [
                {path: '', redirectTo: 'home', pathMatch: 'full'},
                { path: 'home', component: HomeComponent},
                {path: 'others',loadChildren:'./institution/staff-dashboard/pages/others/others.module#OthersModule',},
                {path: '**', redirectTo: 'home', pathMatch: 'full'},
                ]
    },
    {
        path: '', redirectTo: '/login1', pathMatch: 'full'
    },
    {
        path: 'signup2', component: IsupComponent,
        children: [{ path: '', component: SignUp2Component }]
    },
    {
        path: 'login2', component: IsupComponent,
        children: [{ path: '', component: SignIn2Component }]
    },
    {
        path: 'isupDashboard',
         component: IsupDashboardComponent,
         canActivate:[AuthGuard],
                children: [
                {path: '', redirectTo: 'home', pathMatch: 'full'},
                { path: 'home', component: HomeComponent},
                {path: 'others',loadChildren:'./institution/staff-dashboard/pages/others/others.module#OthersModule',},
                {path: '**', redirectTo: 'home', pathMatch: 'full'},
                ]
    },
    {
        path: '', redirectTo: '/login2', pathMatch: 'full'
    }

    
];


