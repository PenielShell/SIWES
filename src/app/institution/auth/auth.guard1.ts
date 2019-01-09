import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { StaffService } from "../shared/staff.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard1 implements CanActivate {

  constructor(private staffService : StaffService,private router : Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (!this.staffService.isLoggedIn()) {
        this.router.navigateByUrl('/login');
        this.staffService.deleteToken();
        return false;
      }
    return true;
  }
}