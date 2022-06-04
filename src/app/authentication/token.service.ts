import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  //method to return token using the localStorage variable from the library that was intalled (jwt-decode)
  returnToken() {
    //If there is no token, it returns ''
    return localStorage.getItem(KEY) ?? '';
  }

  saveToken(token: string) {
    localStorage.setItem(KEY, token);
  }

  deleteToken() {
    localStorage.removeItem(KEY);
  }

  //!! will return a boolean
  hasToken() {
    return !!this.returnToken();
  }
}
