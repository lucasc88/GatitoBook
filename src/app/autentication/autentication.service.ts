import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {

  //Constructor declares a private attribute HttpClient
  constructor(private httpClient: HttpClient) { }


  //Authentication Method do a POST using the httpClient. First parameter: URL; second: the return body
  authentication(user: string, password: string): Observable<any> {
    return this.httpClient.post('http://localhost:3000/user/login', {
      userName: user,
      password: password
    });
  }
}
