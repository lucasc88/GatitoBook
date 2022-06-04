import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../authentication/token.service';
import { Animal, Animals } from './animals';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  userList(userName: string): Observable<Animals> {
    //tokenService gets the token
    const token = this.tokenService.returnToken();
    //headers creation to put the token in the Get request
    const headers = new HttpHeaders().append('x-access-token', token);

    //get<Animals> will return a Animals type
    //The API needs a token verification, because of this is necessary to put headers
    return this.httpClient.get<Animals>(`${API}/${userName}/photos`, {
      headers
    });
  }

  searchById(id: number): Observable<Animal> {
    const token = this.tokenService.returnToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.httpClient.get<Animal>(`${API}/photos/${id}`, { headers });
  }
}
