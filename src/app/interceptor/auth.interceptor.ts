import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to api url
        // const currentUser = this.authenticationService.currentUserValue;
        const token = localStorage.getItem('token');
        // const isApiUrl = request.url.startsWith(environment.apiUrl);
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${ token}`
                }
            });
        }

        return next.handle(request);
    }
}
