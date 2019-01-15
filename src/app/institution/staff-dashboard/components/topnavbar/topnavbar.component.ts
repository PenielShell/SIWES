import { Component } from '@angular/core';
import {smoothlyMenu} from "../../staff-dashboard.Helpers";
import { StaffService } from './../../../shared/staff.service';
import { Router } from "@angular/router";


@Component({
    selector: 'topnavbar',
    templateUrl: 'topnavbar.component.html'
})

export class Topnavbar {
   
    
    constructor(private staffService: StaffService, private router: Router) { }
    ngOnInit() {
    
    }
    
    toggleNavigation(): void {
        
        jQuery("body").toggleClass("mini-navbar");
        smoothlyMenu();
    }
    // logout() {
    //     localStorage.clear();
    //     // location.href='http://to_login_page';
    // }
   
    onLogout(){
        this.staffService.deleteToken();
        this.router.navigate(['/login']);
      }

}