import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Forma } from './forma.model';

@Injectable()
export class FormaService {
  selectedForma: Forma;
  formas: Forma[];
  readonly baseURL = 'http://localhost:3002/formas';

  constructor(private http: HttpClient) { }

  postForma(emp: Forma) {
    return this.http.post(this.baseURL, emp);
  }

  getFormaList() {
    return this.http.get(this.baseURL);
  }

  putForma(emp: Forma) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteForma(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}

