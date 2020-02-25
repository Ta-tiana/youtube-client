import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./pages/login/login.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '', component: LoginComponent,
    children: [{ path: ':id/:name', component: LoginComponent}]}
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
