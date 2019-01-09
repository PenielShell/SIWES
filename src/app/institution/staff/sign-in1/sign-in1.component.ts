import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { StaffService } from '../../shared/staff.service';


@Component({
  selector: 'app-sign-in1',
  templateUrl: './sign-in1.component.html',
  styleUrls: ['./sign-in1.component.css']
})
export class SignIn1Component implements OnInit {

  constructor(private staffService: StaffService,private router : Router) { }

  model ={
    staffId :1,
    password:''
  };
 // emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  ngOnInit() {
    if(this.staffService.isLoggedIn())
    this.router.navigateByUrl('/staffDashboard');
  }

  onSubmit(form : NgForm){
    this.staffService.login(form.value).subscribe(
      res => {
        this.staffService.setToken(res['token']);
        this.router.navigateByUrl('/staffDashboard');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

}
