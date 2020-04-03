import { Routes } from '@angular/router';
import { EventsListComponent } from './app/events/events.list.component';
import { EventDetailsComponent } from './app/events/details/event-details.component';
import { CreateEventComponent } from './app/events/create-event.component';
import { Error404Component } from './app/errors/error-404.component';
import { EventListResolver } from './app/events/events.list-resolver.service';
import { CreateSessionComponent } from './app/events/details/create-session.component';
import { EventResolver } from './app/events/event-resolver';

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
    resolve: { event: EventResolver }
  }, {
    path: 'events/sessions/new',
    component: CreateSessionComponent
  }, {
    path: '404',
    component: Error404Component
  }, {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  }, {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  }
];
