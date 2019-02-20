import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Isup } from './isup.model';

@Injectable({
  providedIn: 'root'
})
export class IsupService {

  selectedIsup: Isup = {
    email: '',
    phoneNo: null,
    password: ''
  };
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };


  constructor(private http: HttpClient) { }

  postIsup(isup: Isup){
    return this.http.post(environment.apiBaseUrl2 +'/register',isup,this.noAuthHeader);
  }
  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl2 + '/authenticate',authCredentials,this.noAuthHeader);
  }

  getIsupDashboard() {
    return this.http.get(environment.apiBaseUrl2 + '/isupDashboard');
  }
  


  //Helper Methods

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
