import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { IsupService } from '../../shared2/isup.service';

@Component({
  selector: 'app-sign-in2',
  templateUrl: './sign-in2.component.html',
  styleUrls: ['./sign-in2.component.css']
})
export class SignIn2Component implements OnInit {

  constructor(private isupService: IsupService,private router : Router) { }

  model ={
    email:'',
    password:''
  };
 emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  ngOnInit() {
    if(this.isupService.isLoggedIn())
    this.router.navigateByUrl('/isupDashboard');
  }

  onSubmit(form : NgForm){
    this.isupService.login(form.value).subscribe(
      res => {
        this.isupService.setToken(res['token']);
        this.router.navigateByUrl('/isupDashboard');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

}
