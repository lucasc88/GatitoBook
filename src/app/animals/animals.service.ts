import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, mapTo, Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../authentication/token.service';
import { Animal, Animals } from './animals';

const API = environment.apiURL;
const NOT_MODIFIED = '304'; //modified status code

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  userList(userName: string): Observable<Animals> {

    //get<Animals> will return a Animals type
    //The API needs a token verification, because of this is necessary to put headers
    return this.httpClient.get<Animals>(`${API}/${userName}/photos`);
  }

  searchById(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(`${API}/photos/${id}`);
  }

  deleteAnimal(id: number): Observable<Animal> {
    return this.httpClient.delete<Animal>(`${API}/photos/${id}`);
  }


  likes(id: number): Observable<boolean> {
    //POST request needs URL and Body by default.
    //However to get the POST request status, needs observe: 'response' to get the entire response
    return this.httpClient.post(
      `${API}/photos/${id}/likes`,
      {},
      { observe: 'response' }
    ).pipe( //to handle the request flow with operators
      mapTo(true), //on success, always returns true
      catchError((error) => { //on failure, returns false or throw the error
        return error.status == NOT_MODIFIED ? of(false) : throwError(error);//of(false) is an Observable
      })
    );
  }
}
