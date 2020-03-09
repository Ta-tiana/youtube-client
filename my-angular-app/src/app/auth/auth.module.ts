import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { HttpSService } from '../youtube/service/http-s.service';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent

  ],
  imports: [
    CommonModule, AuthRoutingModule, FormsModule
  ],
  exports: [
    LoginComponent,
    RegistrationComponent
  ],
  providers: [
    AuthService, LoginService, HttpSService
  ]
})
export class AuthModule { }
