import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {BehaviorSubject, Observable} from 'rxjs';
import {Constant} from '../util/constant';
import {HttpClient} from '@angular/common/http';
import {UserAuth} from '../model/user-auth';
import {map, tap} from 'rxjs/operators';
import {TokenStorageService} from './token-strorage.service';
import {Credential} from '../model/credential';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // la route précédente
  private _previousRoute: string;

  // BehaviorSubject qui garde/met à jour le token et le username du user connecté/ou pas
  private _authToken = new BehaviorSubject<UserAuth>(this._tokenStorage.getUserAuth());

  // BehaviorSubject qui garde/met à jour l'état user s'il est connecté/ou pas
  public readonly isUserLoggedIn: Observable<boolean> = this._authToken.asObservable().pipe(
    map((token: UserAuth) => token.token != null)
  );

  // BehaviorSubject qui garde/met à jour le username user connecté/ou pas
  public readonly username: Observable<string> = this._authToken.asObservable().pipe(
    map((token: UserAuth) => token.username)
  );

  constructor(private _http: HttpClient,
              private _tokenStorage: TokenStorageService) { }

  public save(user: User): Observable<any> {

    return this._http.post(Constant.URL, user);
  }

  login(credential: Credential): Observable<boolean> {

    return this._http.post(Constant.LOGIN_URL, credential).pipe(
      tap((data: UserAuth) => {
        this._tokenStorage.saveToken(data);
        this._authToken.next(data);
      }),
      map(data => data.token != null),
    );
  }

  logOut() {
    this._tokenStorage.clear();
    this._authToken.next(this._tokenStorage.getUserAuth());
    console.log(this._tokenStorage.getUserAuth());
  }

}
