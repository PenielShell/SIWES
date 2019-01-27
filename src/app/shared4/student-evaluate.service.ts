import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { StudentEvaluate } from './student-evaluate.model';

@Injectable({
  providedIn: 'root'
})
export class StudentEvaluateService {

  selectedStudentEvaluate: StudentEvaluate;
  studEva: StudentEvaluate[];
  readonly baseURL = 'http://localhost:3003/studEva';

  constructor(private http: HttpClient) { }

  postStudentEvaluate(emp: StudentEvaluate) {
    return this.http.post(this.baseURL, emp);
  }

  getStudentEvaluateList() {
    return this.http.get(this.baseURL);
  }

  putStudentEvaluate(emp: StudentEvaluate) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteStudentEvaluate(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
