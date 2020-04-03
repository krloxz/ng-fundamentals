import { SessionListComponent } from './session-list.component';
import { Session } from '../shared/event.model';

describe('SessionListComponent', () => {
  let component: SessionListComponent;

  beforeEach(() => {
    component = new SessionListComponent(undefined, undefined);
  });

  describe('ngOnChanges', () => {
    it('should filter the sessions correctly', () => {
      component.sessions = <Session[]>[
        { name: 'session 1', level: 'beginner' },
        { name: 'session 2', level: 'advanced' },
        { name: 'session 3', level: 'beginner' }
      ];
      component.filter = 'beginner';
      component.order = 'name';
      component.eventId = 3;

      component.ngOnChanges();

      expect(component.filteredSessions.length).toBe(2);
    });

    it('should sort the sessions correctly', () => {
      component.sessions = <Session[]>[
        { name: 'session 1', level: 'beginner' },
        { name: 'session 3', level: 'advanced' },
        { name: 'session 2', level: 'beginner' }
      ];
      component.filter = 'all';
      component.order = 'name';
      component.eventId = 3;

      component.ngOnChanges();

      expect(component.filteredSessions[2].name).toBe('session 3');
    });
  });
});
