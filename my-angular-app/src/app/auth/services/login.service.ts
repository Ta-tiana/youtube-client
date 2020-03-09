import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public logNick: string;
  public logPassword: string;
  public regFName: string = '';
  public regLName: string = '';
  public regEmail: string = '';
  public regPassword: string = '';

  public setLogInfoValue(nick: string, pass: string): void {
    this.logPassword = pass;
    this.logNick = nick;
  }

  public setRegInfoValue(name: string, surname: string, mail: string, pass: string): void {
    this.regFName = name;
    this.regLName = surname;
    this.regEmail = mail;
    this.regPassword = pass;
  }

  public isRegFromFilled(): boolean {
    return !!(this.regFName &&
      this.regLName &&
      this.regEmail &&
      this.regPassword);
  }

  public isInfoEqual(): boolean {
    return this.regPassword === this.logPassword;
  }
}
