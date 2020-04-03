import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable()
export class AuthService {
  currentUser: User;

  constructor(private http: HttpClient) {}

  login(userName: string, password: string) {
    const loginInfo = {
      username: userName,
      password: password
    };
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('/api/login', loginInfo, options)
      .pipe(tap(data => {
        this.currentUser = <User>data['user'];
      }))
      .pipe(catchError(error => {
        return of(false);
      }));
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  checkAuthenticationStatus() {
    this.http.get('/api/currentIdentity')
      .subscribe(data => {
        if (data instanceof Object) {
          this.currentUser = <User>data;
        }
      });
  }

  updateCurrentUser(firstName: string, lastName: string): Observable<User> {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<User>(`/api/users/${this.currentUser.id}`, this.currentUser, options);
  }

  logout(): Observable<any> {
    this.currentUser = undefined;

    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('/api/logout', {}, options);
  }

}
