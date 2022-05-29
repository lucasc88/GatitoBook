import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/autentication/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  //with $ at the final, it means that's an Observable type
  //user$ = this.userService.returnUser();
  
  logged = true;

  //constructor(private userService: UserService, private router: Router) { }

  constructor(private router: Router) { }

  logout() {
    //this.userService.logout(); it's not implemented in the back-end
    console.log("Logout is Done");
    this.logged = !this.logged;
    this.router.navigate(['']);
  }

}
