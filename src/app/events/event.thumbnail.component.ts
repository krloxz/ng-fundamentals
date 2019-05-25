import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{event.price}}</div>
        <div>
          <span>Location: {{event.location.address}}</span>
          <span>&nbsp;</span>
          <span>{{event.location.city}}, {{event.location.country}}</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
   div .well {
      color: #bbb
    }
  `]
})
export class EventTumbnailComponent {
  @Input() event: any;
}
