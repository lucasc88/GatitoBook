import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

//It's a service responsible for intercepting all requests before sending them to the server.
//The order of interceptors is not guaranteed. Each must be independent.
//In this case it will be useful to add the token.
@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.tokenService.hasToken()) {

      //tokenService gets the token
      const token = this.tokenService.returnToken();

      //headers creation to put the token in the request
      const headers = new HttpHeaders().append('x-access-token', token);

      //request is a immutable object, so, it's necessary to make a clone of it and
      //add the necessary data, in this case, the headers with token
      request = request.clone({ headers });
    }
    return next.handle(request);
  }
}
