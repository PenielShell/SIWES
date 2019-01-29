import { Component } from '@angular/core';
import {smoothlyMenu} from "../../isup-dashboard.Helpers";
import { IsupService } from './../../../shared2/isup.service';
import { Router } from "@angular/router";


@Component({
    selector: 'topnavbar2',
    templateUrl: 'topnavbar2.component.html'
})

export class Topnavbar2 {
   
    
    constructor(private isupService: IsupService, private router: Router) { }
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
        this.isupService.deleteToken();
        this.router.navigate(['/login']);
      }

}