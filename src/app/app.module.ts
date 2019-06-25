import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events.list.component';
import { EventTumbnailComponent } from './events/event.thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes';
import { EventDetailsComponent } from './events/details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventDetailsActivator } from './events/details/event-details-activator.service';
import { Error404Component } from './errors/error-404.component';
import { EventListResolver } from './events/events.list-resolver.service';
import { AuthService } from './user/auth.service';
import { CreateSessionComponent } from './events/details/create-session.component';
import { SessionListComponent } from './events/details/session-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventTumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent
  ],
  bootstrap: [EventsAppComponent],
  providers: [
    EventService,
    ToastrService,
    AuthService,
    EventDetailsActivator,
    EventListResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
