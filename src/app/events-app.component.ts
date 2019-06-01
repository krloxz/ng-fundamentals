import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    <events-navbar></events-navbar>
    <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
