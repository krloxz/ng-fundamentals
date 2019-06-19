import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable()
export class AuthService {
  currentUser: User;

  login(userName: string, password: string): void {
    this.currentUser = {
      id: 1,
      firstName: 'Johny',
      lastName: 'Test',
      userName: userName
    };
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string): void {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }

}
