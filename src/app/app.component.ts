import { Component } from '@angular/core';
import { HttpService } from './components/shared/services/http.service';
import { AuthService } from './components/shared/services/auth.service';
import { environment } from '../environments/environment';
import { of, Observable } from 'rxjs';
import {
  HttpHeaders
}from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'warehouse';
  body = {
    address_1 : '',
    address_2 : '',
    pallets : '',
    start_date : '',
    end_date : ''
  };
  err_body = {
    address_1 : [''],
    address_2 : [''],
    pallets : [''],
    start_date : [''],
    end_date : ['']
  };
  response = {
    total : 0,
    service_charges : 0,
    over_all_total : 0,
    origin_addresses :'',
    destination_addresses :'',
    miles :'',
    msg:''
  };
  constructor(private HttpService: HttpService, private AuthService: AuthService){}

  calculate() {
    this.AuthService.login().subscribe();
    var url = environment.warehouseApiEndPoint+"api/price";
    let headers = new HttpHeaders({'content-type': 'application/json', 'Authorization' : 'Bearer '+this.AuthService.getToken()});
    this.HttpService.postData(url, this.body, headers).subscribe((res) => {
      console.log(res);
      if(res.msg){
        this.response.msg = res.msg;
        this.response.miles = '';
      } else {
        this.response = res.data;
      }
      
      
   
      
    },
    (error) => {
      console.log(error);
      this.err_body = error.error.errors;
       
    });    
  }
}
