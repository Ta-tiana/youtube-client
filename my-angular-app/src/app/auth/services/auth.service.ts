import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public logNick: string;
  public logPassword: string;
  public regFName: string = '';
  public regLName: string = '';
  public regEmail: string = '';
  public regPassword: string = '';

  constructor() { }

  public isRegistered(): boolean {
    const token: string = localStorage.getItem('token');
    return this.isTokenExpired(token);
  }

  public isTokenExpired(token: string): boolean {
    return Boolean(localStorage.getItem('token'));
  }

  public setToken(): void {
    let count: number = 0;
    localStorage.setItem('token', count.toString() );
    count++;
  }

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
