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
//In this case it will be useful to add the token.
@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.tokenService.hasToken()) {
      const token = this.tokenService.returnToken();
      const headers = new HttpHeaders().append('x-access-token', token);

      //request is a immutable object, so, it's necessary to make a clone of it and
      //add the necessary data, in this case, the headers with token
      request = request.clone({ headers });
    }
    return next.handle(request);
  }
}
