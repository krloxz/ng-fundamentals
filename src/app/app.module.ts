import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events.list.component';
import { EventTumbnailComponent } from './events/event.thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import {
  TOASTR_TOKEN,
  Toastr,
  CollapsibleWellComponent,
  JQ_TOKEN,
  SimpleModalComponent,
  ModalTriggerDirective } from './common/index';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { appRoutes } from 'src/routes';
import { EventDetailsComponent } from './events/details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/error-404.component';
import { EventListResolver } from './events/events.list-resolver.service';
import { AuthService } from './user/auth.service';
import { CreateSessionComponent } from './events/details/create-session.component';
import { SessionListComponent } from './events/details/session-list.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { UpvoteComponent } from './events/details/upvote.component';
import { VoterService } from './events/details/voter.service';
import { LocationValidator } from './events/location-validator.directive';
import { HttpClientModule } from '@angular/common/http';
import { EventResolver } from './events/event-resolver';

const toastr: Toastr = window['toastr'];
const jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
    HttpClientModule
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
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    DurationPipe,
    UpvoteComponent,
    LocationValidator
  ],
  bootstrap: [EventsAppComponent],
  providers: [
    EventService,
    AuthService,
    EventListResolver,
    EventResolver,
    VoterService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide: JQ_TOKEN,
      useValue: jQuery
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
