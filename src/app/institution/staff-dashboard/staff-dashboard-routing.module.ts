import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import { StaffDashboardComponent } from './staff-dashboard.component';
import { NgModule } from '@angular/core';

// export const appRoutes=[
//     {
//         path:'',
//         redirectTo:'./home',
//         pathMatch:'full'
//     },
//     {
//         path: 'home',
//         component: HomeComponent
//     },
//     {
//         path: 'others',
//         loadChildren:'./pages/others/others.module#OthersModule',
//     },
// ];
// const staffDashboardModuleRoutes: Routes = [
// {
//     path: 'staff-dashboard',
//     component: StaffDashboardComponent,
//     children:[
//         {
//             path: 'home', component: HomeComponent,
//             children: [{ path: '', component: HomeComponent}]
//         },
//         {
//             path: 'others',
//             loadChildren:'./institution/staff-dashboard/pages/others/others.module#OthersModule',
//         }, 
//     ]
// }
// ];

// @NgModule({
//     imports:[
//         RouterModule.forChild(staffDashboardModuleRoutes)
//     ],
//     declarations: [],
//     exports:[
//         RouterModule
//     ]
// })
// export class StaffDashboardRoutingModule{}