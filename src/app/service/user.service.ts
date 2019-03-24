import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _allUsers = new BehaviorSubject<User[]>(null);

  URL = 'http://localhost:8080/api/user';

  constructor(private _http: HttpClient) {
  }

  public save(user: User): Observable<any> {

    return this._http.post(this.URL, user);
  }

  public findAll(): Observable<User[]> {
    return this._http.get<User[]>(this.URL).pipe(
      tap(data => {
        this._allUsers.next(data);
      })
    );
  }

  public delete(user: User) {
    return this._http.delete(this.URL + '/' + user.id);
  }

  public findById(id: number): Observable<User> {

    return this._http.get<User>(this.URL + '/' + id);
  }

  public update(user: User) {
    return this._http.put(this.URL, user);
  }

  findAllPages(page: number, size: number) {

    return this._http.get<User[]>(this.URL + '/allpages?' + 'page=' + page + '&size=' + size)
      .pipe(
        tap(val => console.log(val)));
  }

  getnumberOfUsersInDatabase() {

    return this._http.get(this.URL + '/size');
  }
}
