import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";
import { StaffService } from './../../../shared/staff.service';
import { Staff } from './../../../shared/staff.model';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html'
})
export class Navigation implements OnInit {
    @Input() loginInfo:Staff;
    // constructor(private staffService: StaffService, private router: Router) { }
    constructor( private router: Router) {this.loginInfo; }

    ngOnInit() { 
        // if(this.staffService.getStaffDashboard())
        // this.router.navigateByUrl('/home');
    }
    activeRoute(routename: string): boolean{
        
        return this.router.url.indexOf(routename) > -1;
    }
    
    
}