import { Component, OnInit } from '@angular/core';
import { StaffService } from '../shared/staff.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.css']
})
export class StaffDashboardComponent implements OnInit {
  staffDetails;
  constructor(private staffService: StaffService, private router: Router) { }

  ngOnInit() {
    this.staffService.getStaffDashboard().subscribe(
      res => {
        this.staffDetails = res['staff'];
      },
      err => { 
        console.log(err);
        
      }
    );
  }

  onLogout(){
    this.staffService.deleteToken();
    this.router.navigate(['/login']);
  }

}

