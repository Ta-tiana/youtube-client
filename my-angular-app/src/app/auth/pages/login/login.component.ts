import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor (
      private router: Router,
      public authService: AuthService,
      public loginService: LoginService
    ) { }

  public goToRegistration(): void {
    this.router.navigateByUrl(`auth/registration`).then(r => console.log(r)) ;
  }

  public logIn(form: any): void {
    this.loginService.setLogInfoValue(form.__ngContext__[28].value, form.__ngContext__[33].value);
    if (this.loginService.isInfoEqual()) {
      alert(`Добро пожаловать, ${this.loginService.regFName}!`);
      this.authService.setToken();
      this.router.navigateByUrl(``).then(r => console.log(r)) ;
    } else {
      alert(` ${this.loginService.regPassword ? 'Неверный пароль! псс..пароль: ' +
        this.loginService.regPassword : 'Пользователь не найден!' } ` );
    }
  }

  public ngOnInit(): void {
  }
}
