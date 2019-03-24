import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {Observable} from 'rxjs';
import {Constant} from '../util/constant';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  public save(user: User): Observable<any> {

    return this._http.post(Constant.URL, user);
  }
}
