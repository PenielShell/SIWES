import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-spacing
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  getUserDetails(MatricNo, password) {
    // post these details to Api server return user if correct
    return this.http.post('/api/auth.php', {
      MatricNo,
      password
    }).subscribe(data => {
      console.log(data, 'is what we got form the serve');
    });
  }


}
