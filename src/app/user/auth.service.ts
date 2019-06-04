import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable()
export class AuthService {
  currentUser: User;

  login(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      firstName: 'Johny',
      lastName: 'Test',
      userName: userName
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

}
