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

  @Input()
  order: string;

  filteredSessions: Session[];

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions();
      this.orderSessions();
    }
  }

  filterSessions(): void {
    if (this.filter === 'all') {
      this.filteredSessions = this.sessions.slice(0);
    } else {
      this.filteredSessions = this.sessions.filter(session => session.level.toLowerCase() === this.filter);
    }
  }
  orderSessions(): void {
    if (this.order === 'byVoters') {
      this.filteredSessions.sort(sortByVotersDesc);
    } else {
      this.filteredSessions.sort(sortByNameAsc);
    }
  }

}

function sortByVotersDesc(s1: Session, s2: Session): number {
  return s2.voters.length - s1.voters.length;
}

function sortByNameAsc(s1: Session, s2: Session): number {
  if (s1.name < s2.name) {
    return -1;
  }
  if (s1.name > s2.name) {
    return 1;
  }
  return 0;
}
