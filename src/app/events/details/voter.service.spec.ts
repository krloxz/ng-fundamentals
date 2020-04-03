import { VoterService } from './voter.service';
import { Session } from '../shared/event.model';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('VoterService', () => {
  let voterService: VoterService;
  let mockHttp: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj<HttpClient>('mockHttp', ['post', 'delete']);
    voterService = new VoterService(mockHttp);
  });

  describe('deleteVoter', () => {
    it('should remove the voter from the list of voters', () => {
      // Arrange
      const session = <Session>{ id: 6, voters: ['joe', 'john'] };
      mockHttp.delete.and.returnValue(of(false));

      // Act
      voterService.deleteVoter(3, session, 'joe');

      // Assert
      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe('john');
    });

    it('should call http.delete with the right URL', () => {
      // Arrange
      const session = <Session>{ id: 6, voters: ['joe', 'john'] };
      mockHttp.delete.and.returnValue(of(false));

      // Act
      voterService.deleteVoter(3, session, 'joe');

      // Assert
      expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe');
    });
  });

  describe('addVoter', () => {
    it('should call http.post with the right URL', () => {
      // Arrange
      const session = <Session>{ id: 6, voters: ['john'] };
      mockHttp.post.and.returnValue(of(false));

      // Act
      voterService.addVoter(3, session, 'joe');

      // Assert
      expect(mockHttp.post)
        .toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe', {}, jasmine.any(Object));
    });
  });

});
