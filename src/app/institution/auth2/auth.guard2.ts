import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IsupService } from "../shared2/isup.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard2 implements CanActivate {

  constructor(private isupService : IsupService,private router : Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (!this.isupService.isLoggedIn()) {
        this.router.navigateByUrl('/login');
        this.isupService.deleteToken();
        return false;
      }
    return true;
  }
}