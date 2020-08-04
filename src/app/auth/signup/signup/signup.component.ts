import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from '../../auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isLoading = false;

  constructor(
    public authService: AuthService,
    public router: Router  ) { }

  ngOnInit(): void {
  }

  onSignup(form: NgForm) {
    if(form.invalid) {
      return;
    }
    this.authService.createUser( form.value.email, form.value.password );
    // this.router.navigate(['/secure'])

  }
}
