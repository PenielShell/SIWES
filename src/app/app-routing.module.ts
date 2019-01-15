import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./institution/staff-dashboard/pages/home/home.component";
import { StaffDashboardComponent } from './institution/staff-dashboard/staff-dashboard.component';

// const staffDashboardModuleRoutes: Routes = [
//   {
//       path: 'staff-dashboard',
//       component: StaffDashboardComponent,
//       children:[
//           {
//               path: 'home', component: HomeComponent,
//               children: [{ path: '', component: HomeComponent}]
//           },
//           {
//               path: 'others',
//               loadChildren:'./institution/staff-dashboard/pages/others/others.module#OthersModule',
//           }, 
//       ]
//   }
//   ];
@NgModule({
  imports: [
    CommonModule,
    // RouterModule.forChild(staffDashboardModuleRoutes)
  ],
  declarations: []
})
export class AppRoutingModule { }
