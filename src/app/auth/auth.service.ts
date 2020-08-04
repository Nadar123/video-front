import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Auth} from './auth.model';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;

  constructor(private http: HttpClient) { }

  getToken() {
    return this.token;
  }

  createUser(email: string, password: string) {
    const auth: Auth = { email: email, password: password };
    this.http
      .post("http://localhost:3000/api/user/signup", auth)
      .subscribe(response => {
        console.log(response);
      });
  }

  login(email: string, password: string){
    const auth: Auth = { email: email, password: password };
    this.http.post<{token: string}>("http://localhost:3000/api/user/login", auth)
    .subscribe(response => {
      const token = response.token;
      this.token = token;
    });
  }
}
