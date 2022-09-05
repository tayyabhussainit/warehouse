import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthService } from './components/shared/services/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';
// const initializeApp = (auth: AuthService) => {
//   return () => auth.login();
// };
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],

   providers: [], // [{
  //   // provide: APP_INITIALIZER,
  //   // useFactory: initializeApp,
  //   //deps: [AuthService],
  //   //multi: true,
  // },
  // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
