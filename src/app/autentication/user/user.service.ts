import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import { User } from './user';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //BehaviorSubject is an Observable that keeps the User
  //When instantiated, the constructor is empty   {}
  private userSubject = new BehaviorSubject<User>({});

  constructor(private tokenService: TokenService) {
    //if in case the user had accessed before, it will notify all components
    if (this.tokenService.hasToken()) {
      this.decodeJWT();
    }
  }

  private decodeJWT() {
    const token = this.tokenService.returnToken();

    //using the library that was installed (jwt-decode)
    const user = jwt_decode(token) as User;

    //to notify all the component about this user using BehaviorSubject
    this.userSubject.next(user);
  }

  //just return the User, not the BehaviorSubject itself
  returnUser() {
    return this.userSubject.asObservable();
  }

  saveToken(token: string) {
    this.tokenService.saveToken(token);
    this.decodeJWT();
  }

  logout() {
    //remove the token
    this.tokenService.deleteToken();

    //an empty object is the next inside the BehaviorSubject
    this.userSubject.next({});
  }

  isLogged(){
    return this.tokenService.hasToken();
  }
}
