import { Injectable } from '@angular/core';
import { Session } from '../shared/event.model';

@Injectable()
export class VoterService {

  addVoter(session: Session, voterName: string) {
    session.voters.push(voterName);
  }

  deleteVoter(session: Session, voterName: string) {
    session.voters = session.voters.filter(voter => voter !== voterName);
  }

  userHasVoted(session: Session, voterName: string): boolean {
    return session.voters.some(voter => voter === voterName);
  }

}
