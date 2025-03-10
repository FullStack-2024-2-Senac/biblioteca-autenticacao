
    import { Component } from '@angular/core';
    import { AuthService } from './auth.service';

    @Component({
      selector: 'app-login',
      templateUrl: './login.component.html',
    })
    export class LoginComponent {
      username: string;
      password: string;

      constructor(private authService: AuthService) {}

      login() {
        this.authService.login(this.username, this.password).subscribe(
          (response: any) => {
            localStorage.setItem('token', response.token);
          },
          (error) => {
            console.error('Login failed', error);
          }
        );
      }
    }
    