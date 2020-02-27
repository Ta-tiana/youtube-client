import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';

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
    AuthService
  ]
})
export class AuthModule { }
