import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { User } from '../user/user.model';

@Component({
  selector: 'events-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    li > a.active { color: #F97924; }
  `]
})
export class NavBarComponent {

  currentUser: User;

  constructor(private authService: AuthService) {}

  isAuthenticated(): boolean {
    const isAuthenticated = this.authService.isAuthenticated();
    if (isAuthenticated) {
      this.currentUser = this.authService.currentUser;
    }
    return isAuthenticated;
  }

}
