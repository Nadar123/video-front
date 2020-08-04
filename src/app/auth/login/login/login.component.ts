import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() isLogIn = new EventEmitter<boolean>();

  isLoading = false;

  constructor(
    public router: Router, 
    public authService:AuthService ) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm) {
    if(form.invalid) {
      return
    }
    this.authService.login(form.value.email, form.value.password);
    // this.router.navigate(['/secure'])
  }
  
}
