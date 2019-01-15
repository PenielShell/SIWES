import { Component } from '@angular/core';
import {smoothlyMenu} from "../../student-dashboard.Helpers";
import { StudentService } from './../../../shared/student.service';
import { Router } from "@angular/router";


@Component({
    selector: 'topnavbar1',
    templateUrl: 'topnavbar1.component.html'
})

export class Topnavbar1 {
   
    
    constructor(private studentService: StudentService, private router: Router) { }
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
        this.studentService.deleteToken();
        this.router.navigate(['/login']);
      }

}