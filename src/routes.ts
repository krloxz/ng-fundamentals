import { Routes } from '@angular/router';
import { EventsListComponent } from './app/events/events.list.component';
import { EventDetailsComponent } from './app/events/details/event-details.component';
import { CreateEventComponent } from './app/events/create-event.component';
import { EventDetailsActivator } from './app/events/details/event-details-activator.service';
import { Error404Component } from './app/errors/error-404.component';
import { EventListResolver } from './app/events/events.list-resolver.service';

export const appRoutes: Routes = [
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventListResolver }
  }, {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  }, {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventDetailsActivator]
  }, {
    path: '404',
    component: Error404Component
  }, {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  }
];
