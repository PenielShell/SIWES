import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Supervisor } from '../shared3/supervisor.model';


@Injectable({
  providedIn: 'root'
})
export class SupervisorService {
 
  selectedSupervisor: Supervisor;
  supervisors: Supervisor[];
  readonly baseURL = 'http://localhost:3002/supervisors';

  constructor(private http: HttpClient) { }
  
  postSupervisor(emp: Supervisor) {
    return this.http.post(this.baseURL, emp);
  }

  getSupervisorList() {
    return this.http.get(this.baseURL);
   
  }

  putSupervisor(emp: Supervisor) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteSupervisor(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
