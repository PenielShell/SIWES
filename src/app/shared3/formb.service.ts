import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Formb } from './formb.model';

@Injectable({
  providedIn: 'root'
})
export class FormbService {

  selectedFormb: Formb;
  formbs: Formb[];
  readonly baseURL = 'http://localhost:3003/formbs';

  constructor(private http: HttpClient) { }

  postFormb(emp: Formb) {
    return this.http.post(this.baseURL, emp);
  }

  getFormbList() {
    return this.http.get(this.baseURL);
  }

  putFormb(emp: Formb) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteFormb(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
