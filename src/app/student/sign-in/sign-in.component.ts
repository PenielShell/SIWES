import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { StudentService } from '../../shared/student.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private studentService: StudentService,private router : Router) { }

  model ={
    matricNo :1,
    password:''
  };
 // emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  ngOnInit() {
    if(this.studentService.isLoggedIn())
    this.router.navigateByUrl('/studentDashboard');
  }

  onSubmit(form : NgForm){
    this.studentService.login(form.value).subscribe(
      res => {
        this.studentService.setToken(res['token']);
        this.router.navigateByUrl('/studentDashboard');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

}
