import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from './shared/event.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Event } from './shared/event.model';

@Injectable()
export class EventListResolver implements Resolve<any[]> {

  constructor(private eventService: EventService) { }

  resolve(): Observable<Event[]> {
    return this.eventService.getEvents().pipe(map(events => events));
  }

}
