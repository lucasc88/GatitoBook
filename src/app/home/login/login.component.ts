import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticationService } from 'src/app/autentication/autentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: string = '';
  password: string = '';

  constructor(private authService: AutenticationService, private router: Router) { }

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
