import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styles: [`
    em { color: red; float: right; padding-left: 10px; }
  `]
})
export class LoginComponent {
  userName: string;
  password: string;
  mouseOverLogin: boolean;
  invalidLogin = false;

  constructor(private authService: AuthService, private router: Router) {}

  login(form: any): void {
    this.authService.login(form.userName, form.password)
      .subscribe(success => {
        if (!success) {
          this.invalidLogin = true;
        } else {
          this.router.navigate(['/events']);
        }
      });
  }

  cancel(): void {
    this.router.navigate(['/events']);
  }

}
