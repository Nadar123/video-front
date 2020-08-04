import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() isLogIn = new EventEmitter<boolean>();

  isLoading = false;

  constructor(public router: Router ) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm) {
    console.log(form.value);

    this.router.navigate(['/secure'])

  }

  loginCheck() {
   this.isLogIn.emit(true); 
  }
}
