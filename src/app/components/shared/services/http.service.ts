import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  postData(url:any, body:any, headers:any) : Observable<any> {

    return this.http.post<any>(url, body, { headers: headers });
  }
}
