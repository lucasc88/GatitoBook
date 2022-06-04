import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: string = '';
  password: string = '';

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void { }

  login() {
    this.authService.authentication(this.user, this.password)
      .subscribe(() => {
        this.router.navigate(['animals']);
      }, (error) =>
        alert(error)
      );
  }

}
