import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from './new-user';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor(private http: HttpClient) { }

  registerNewUser(newUser: NewUser) {
    return this.http.post('http://localhost:3000/login', newUser);
  }

  checkExistingUser(userName: string) {
    //Requesting the MockService, it will return a JSon body, just for checking test
    return this.http.get(`http://localhost:3000/checkExistingUserName`)
  }
}
