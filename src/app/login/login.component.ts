import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

// tslint:disable-next-line:semicolon
MatricNo = 'Input Your matric No';
password = 'Input your password';
  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }
submit() {
  // tslint:disable-next-line:semicolon
  console.log('Succecesfully logged in')
}
loginUser(event) {
  // tslint:disable-next-line:semicolon
  event.preventDefault()
  const target = event.target;
  const MatricNo = target.querySelector('#MatricNo').value;
  const password = target.querySelector('#password').value;

  this.Auth.getUserDetails(MatricNo, password);
  console.log(MatricNo, password);
}

}
