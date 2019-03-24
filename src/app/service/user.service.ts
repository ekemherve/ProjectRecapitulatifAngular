import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Constant} from '../util/constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _allUsers = new BehaviorSubject<User[]>(null);

  constructor(private _http: HttpClient) {
  }

  public save(user: User): Observable<any> {

    return this._http.post(Constant.URL, user);
  }

  public findAll(): Observable<User[]> {
    return this._http.get<User[]>(Constant.URL).pipe(
      tap(data => {
        this._allUsers.next(data);
      })
    );
  }

  public delete(user: User) {
    return this._http.delete(Constant.URL + '/' + user.id);
  }

  public findById(id: number): Observable<User> {

    return this._http.get<User>(Constant.URL + '/' + id);
  }

  public update(user: User) {
    return this._http.put(Constant.URL, user);
  }

  findAllPages(page: number, size: number) {

    return this._http.get<User[]>(Constant.URL + '/allpages?' + 'page=' + page + '&size=' + size)
      .pipe(
        tap(val => console.log(val)));
  }

  getnumberOfUsersInDatabase() {

    return this._http.get(Constant.URL + '/size');
  }
}
