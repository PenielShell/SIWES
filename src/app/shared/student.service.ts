import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  selectedStudent: Student = {
    matricNo: '',
    email: '',
    password: ''
  };

  constructor(private http: HttpClient) { }

  postStudent(student: Student){
    return this.http.post(environment.apiBaseUrl+'/register',student);
  }
}
