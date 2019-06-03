import { Component } from '@angular/core';

@Component({
  selector: 'events-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    li > a.active { color: #F97924; }
  `]
})
export class NavBarComponent {

}
