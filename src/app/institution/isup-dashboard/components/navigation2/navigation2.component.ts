import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";
import { IsupService } from '../../../shared2/isup.service';
import { Isup } from '../../../shared2/isup.model';

@Component({
    selector: 'navigation2',
    templateUrl: './navigation2.component.html'
})
export class Navigation2 implements OnInit {
    @Input() loginInfo:Isup;
    // Cconstructor(private staffService: StaffService, private router: Router) { }
    constructor( private router: Router) {this.loginInfo; }

    ngOnInit() { 
        // if(this.staffService.getStaffDashboard())
        // this.router.navigateByUrl('/home');
    }
    activeRoute(routename: string): boolean{
        
        return this.router.url.indexOf(routename) > -1;
    }
    
    
}