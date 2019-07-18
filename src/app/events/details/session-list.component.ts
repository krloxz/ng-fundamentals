import { Component, Input, OnChanges } from '@angular/core';
import { Session } from '../shared/event.model';

@Component({
  selector: 'session-list',
  templateUrl: 'session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  @Input()
  sessions: Session[];

  @Input()
  filter: string;

  filteredSessions: Session[];

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions();
    }
  }

  filterSessions(): void {
    if (this.filter === 'all') {
      this.filteredSessions = this.sessions.slice(0);
    } else {
      this.filteredSessions = this.sessions.filter(session => session.level.toLowerCase() === this.filter);
    }
  }

}
