import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  selectedStudent: Student = {
    matricNo: null,
    email: '',
    password: ''
  };
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };


  constructor(private http: HttpClient) { }

  postStudent(student: Student){
    return this.http.post(environment.apiBaseUrl1 +'/register',student,this.noAuthHeader);
  }
  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl1 + '/authenticate', authCredentials,this.noAuthHeader);
  }

  getStudentDashboard() {
    return this.http.get(environment.apiBaseUrl1 + '/studentDashboard');
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
