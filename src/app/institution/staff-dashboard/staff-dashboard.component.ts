import { Component, OnInit } from '@angular/core';
import { StaffService } from '../shared/staff.service';
import { Router } from "@angular/router";
import {Staff} from "../shared/staff.model";
import {HomeComponent} from "./pages/home/home.component";




@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.css']
})
export class StaffDashboardComponent implements OnInit {
  loginInfo:Staff = {
    staffId: null,
    email: '', 
    password: ''

    
};
  constructor(private staffService: StaffService, private router: Router) { }

  ngOnInit() {
    
  }
 

  onLogout(){
    this.staffService.deleteToken();
    this.router.navigate(['/login']);
  }

}
// export const appRoutes=[
//   {
//       path:'',
//       redirectTo:'home',
//       pathMatch:'full'
//   },
//   {
//       path: 'home',
//       component: HomeComponent
//   },
//   {
//       path: 'others',
//       loadChildren:'./pages/others/others.module#OthersModule',
//   },
// ];

