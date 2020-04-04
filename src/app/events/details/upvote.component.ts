import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'upvote',
  styleUrls: ['./upvote.component.css'],
  template: `
    <div class="votingWidgetContainer pointable" (click)="onClick()">
      <div class="well votingWidget">
        <div class="votingButton">
          <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
        </div>
        <div class="badge badge-inverse votingCount">
          <div>{{count}}
        </div>
      </div>
    </div>
  `
})
export class UpvoteComponent {
  iconColor: string;
  @Input() count: number;
  @Output() vote = new EventEmitter<any>();
  @Input() set voted(val: boolean) {
    this.iconColor = val ? 'red' : 'white';
  }

  onClick(): void {
    this.vote.emit({});
  }

}
