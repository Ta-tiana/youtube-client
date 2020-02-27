import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router, public authService: AuthService) { }

  public goToRegistration(): void {
    this.router.navigateByUrl(`auth/registration`).then(r => console.log(r)) ;
  }

  public logIn(form: any): void {
    this.authService.setLogInfoValue(form.__ngContext__[28].value, form.__ngContext__[33].value);
    if (this.authService.isInfoEqual()) {
      alert(`Добро пожаловать, ${this.authService.regFName}!`);
      this.authService.setToken();
      this.router.navigateByUrl(``).then(r => console.log(r)) ;
    } else {
      alert(` ${this.authService.regPassword ? 'Неверный пароль! псс..пароль: ' +
        this.authService.regPassword : 'Пользователь не найден!' } ` );
    }
  }

  public ngOnInit(): void {
  }
}
