import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserService } from './user/user.service';
import { tap } from 'rxjs/operators';

const API = environment.apiURL;

//@Injectable is an Angular Annotation that can be injected in other Component or Service
//providedIn by default is root. That means, when it created is a Singleton
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //Constructor declares a private attribute HttpClient
  constructor(private httpClient: HttpClient, private userService: UserService) { }


  //Authentication Method do a POST using the httpClient. First parameter: URL; second: the return body
  //Observable is a asynchronous operation
  authentication(user: string, password: string): Observable<HttpResponse<any>> {

    //run in the api folder command(json-server --watch db.json) to start Json Server http://localhost:3000/login
    return this.httpClient
      .post(
        `${API}/user/login`, {
        userName: user,
        password: password
      },
        { observe: 'response' }
      )
      .pipe(
        tap((res) => {
          const authToken = res.headers.get('x-access-token') ?? '';
          this.userService.saveToken(authToken);
        }));
  }
}
