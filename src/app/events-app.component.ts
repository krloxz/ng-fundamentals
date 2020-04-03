import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'events-app',
  template: `
    <events-navbar></events-navbar>
    <router-outlet></router-outlet>
  `
})
export class EventsAppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.checkAuthenticationStatus();
  }

}
