import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";
import { StudentService } from '../../../shared/student.service';
import { Student } from '../../../shared/student.model';

@Component({
    selector: 'navigation1',
    templateUrl: './navigation1.component.html'
})
export class Navigation1 implements OnInit {
    @Input() loginInfo:Student;
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