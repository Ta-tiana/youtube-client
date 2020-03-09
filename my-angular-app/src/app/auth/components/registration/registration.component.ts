import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor( private router: Router, public loginService: LoginService) { }

  public goToLogin(): void {
    this.router.navigateByUrl(`auth/login`).then(r => (r) ) ;
  }

  public SignIn(form: any): void {
    this.loginService.setRegInfoValue
    (
      form.__ngContext__[28].value,
      form.__ngContext__[33].value,
      form.__ngContext__[38].value,
      form.__ngContext__[43].value
    );
    if (this.loginService.isRegFromFilled()) {
      alert('Вы зарегистрированы! Введите свой логин и пароль!');
      this.router.navigateByUrl(`auth/login`).then(r => (r)) ;
    }
  }

  public ngOnInit(): void {
  }
}
