import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Auth} from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  createUser(email: string, password: string) {
    const auth: Auth = { email: email, password: password };
    this.http
      .post("http://localhost:3000/api/user/signup", auth)
      .subscribe(response => {
        console.log(response);
      });
  }
}
