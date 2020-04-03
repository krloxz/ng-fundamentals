import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { User } from '../user/user.model';
import { Session, Event } from '../events/shared/event.model';
import { EventService } from '../events/shared/event.service';

@Component({
  selector: 'events-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    li > a.active { color: #F97924; }
  `]
})
export class NavBarComponent implements OnInit {

  currentUser: User;
  searchTerm = '';
  foundSessions: Session[];
  events: Event[];

  constructor(private authService: AuthService, private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
    });
  }

  isAuthenticated(): boolean {
    const isAuthenticated = this.authService.isAuthenticated();
    if (isAuthenticated) {
      this.currentUser = this.authService.currentUser;
    }
    return isAuthenticated;
  }

  searchSessions(searchTerm: string): void {
    this.eventService.searchSessions(searchTerm)
      .subscribe(sessions => {
        this.foundSessions = sessions;
      });
  }

}
