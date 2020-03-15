import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isRegistered(): boolean {
    const token: string = localStorage.getItem('token');
    return this.isTokenExist(token);
  }

  public isTokenExist(token: string): boolean {
    return Boolean(localStorage.getItem(token));

  }

  public setToken(): void {
    let count: number = 0;
    localStorage.setItem('token', count.toString() );
    count++;
  }
}
