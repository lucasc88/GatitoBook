import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationInterceptor } from './authentication.interceptor';

//After the AuthenticationInterceptor creation, it's necessary register it
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, //it's a interceptor service
      useClass: AuthenticationInterceptor, //using this class
      multi: true, //if u want to register more than one interceptors
    }]
})
export class AuthenticationModule { }
