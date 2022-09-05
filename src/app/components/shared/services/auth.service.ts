import { Injectable } from '@angular/core';
import {
  HttpHeaders,
  HttpClient,
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  
  constructor(private http: HttpClient) { }
  
  login() : Observable<any> {
    const body = {
      email : environment.email,
      password : environment.password
    }
      let header = new HttpHeaders({'content-type': 'application/json'});
      if (Date.now() > parseInt(this.getDate())) {
      return this.http.post<any>(environment.warehouseApiEndPoint+"api/login", body, {headers : header}).pipe(
        tap((res) => {
          let { token, expires_in } = res;
          localStorage.setItem('token', token);
          localStorage.setItem(
            'expire_time',
            (Date.now() + expires_in * 60000).toString()
          );
        })
      );
      }
     return of(null);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  getDate() {
    return localStorage.getItem('expire_time') || '0';
  }
  loggedIn() {
    return !!localStorage.getItem('userID');
  }
}
