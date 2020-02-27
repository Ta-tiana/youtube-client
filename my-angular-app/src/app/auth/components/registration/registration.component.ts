import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor( private router: Router, public authService: AuthService ) { }

  public goToLogin(): void {
    this.router.navigateByUrl(`auth/login`).then(r => console.log(r) ) ;
  }

  public SignIn(form: any): void {
    this.authService.setRegInfoValue(form.__ngContext__[28].value, form.__ngContext__[33].value,
    form.__ngContext__[38].value, form.__ngContext__[43].value);
    if (this.authService.isRegFromFilled()) {
      alert('Вы зарегистрированы! Введите свой логин и пароль!');
      this.router.navigateByUrl(`auth/login`).then(r => console.log(r)) ;
    }
  }

  public ngOnInit(): void {
  }
}
