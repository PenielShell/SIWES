import { Injectable } from '@angular/core';
import { Ilogbook } from '../interfaces/ilogbook';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import { PusherService } from './pusher.service';

@Injectable()
export class LogbookService {

  private _endPoint = 'http://localhost:2000/logbook'; // normally you use environment.ts
  private _channel: any;
  
  constructor(private _http: HttpClient, private _pusherService: PusherService) {
    this._channel = this._pusherService.getPusher().subscribe('logbook');
  }

  /**
 * @return logbook's channel for the different event available under logbook
 */
getChannel () {
  return this._channel;
}

list (): Observable<Ilogbook[]> {
  return this._http.get(this._endPoint)
  .map(res => <Ilogbook[]> res);
}

/**
 * Create new logbook
 * @param param
 * @return Observable<Ilogbook> with the id
 */
create(param: Ilogbook): Observable<Ilogbook> {
  return this._http.post(this._endPoint, param)
  .map(res => <Ilogbook> res);
}

/**
 * Remove an employee
 * @param logbook to remove
 * @return Observable<IEmployee> the employee just removed
 */
delete(logbook: Ilogbook): Observable<Ilogbook> {
  return this._http.delete(`${this._endPoint}/${logbook.id}`)
  .mapTo(logbook);
}

}
