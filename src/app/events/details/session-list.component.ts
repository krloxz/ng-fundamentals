import { Component, Input, OnChanges } from '@angular/core';
import { Session } from '../shared/event.model';
import { VoterService } from './voter.service';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'session-list',
  templateUrl: 'session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: Session[];
  @Input() filter: string;
  @Input() order: string;
  @Input() eventId: number;
  filteredSessions: Session[];

  constructor(private voterService: VoterService, private authService: AuthService) {}

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

  toggleVote(session: Session): void {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(this.eventId, session, this.authService.currentUser.userName);
    } else {
      this.voterService.addVoter(this.eventId, session, this.authService.currentUser.userName);
    }
    if (this.order === 'byVoters') {
      this.filteredSessions.sort(sortByVotersDesc);
    }
  }

  userHasVoted(session: Session): boolean {
    return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
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
