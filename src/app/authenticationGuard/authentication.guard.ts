import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../authentication/user/user.service';

//Class responsible for blocking routes
@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanLoad {

  constructor(private userService: UserService, private router: Router) { }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    //if user is not logged and trying to access a protected link, it returns to login page
    if (!this.userService.isLogged()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
