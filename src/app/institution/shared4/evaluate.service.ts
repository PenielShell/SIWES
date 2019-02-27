import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../environments/environment';
import { Evaluate } from './evaluate.model';

@Injectable({
  providedIn: 'root'
})
export class EvaluateService {
  
  selectedEvaluate: Evaluate;
  Eva: Evaluate[];
  readonly baseURL = 'http://localhost:3005/evaluates';



  constructor(private http: HttpClient) { }
  
  postEvaluate(emp: Evaluate) {
    return this.http.post(this.baseURL, emp);
  }
  
  getEvaluateList() {
    return this.http.get(this.baseURL);
   
  }
  

  putEvaluate(emp: Evaluate) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteEvaluate(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
