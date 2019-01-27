import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { StaffService } from '../../shared/staff.service'

@Component({
  selector: 'app-sign-up1',
  templateUrl: './sign-up1.component.html',
  styleUrls: ['./sign-up1.component.css']
 
})
export class SignUp1Component implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(private staffService: StaffService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.staffService.postStaff(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }

  resetForm(form: NgForm) {
    this.staffService.selectedStaff = {
      staffId: null,
      email: '',
      password: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
