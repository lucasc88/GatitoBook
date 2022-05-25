import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//@Injectable is an Angular Annotation that can be injected in other Component or Service
//providedIn by default is root. That means, when it created is a Singleton
@Injectable({
  providedIn: 'root'
})
export class AutenticationService {

  //Constructor declares a private attribute HttpClient
  constructor(private httpClient: HttpClient) { }


  //Authentication Method do a POST using the httpClient. First parameter: URL; second: the return body
  //Observable is a asynchronous operation
  authentication(user: string, password: string): Observable<any> {

    //run in the api folder command(json-server --watch db.json) to start Json Server http://localhost:3000/login
    return this.httpClient.post('http://localhost:3000/login', {
      userName: user,
      password: password
    });
  }
}
