import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './youtube/pages/main/main.component';
import { Page404Component } from './youtube/pages/page404/page404.component';

const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'results', loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule)},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  { path: 'page404', component: Page404Component},
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: '**', redirectTo: '/page404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
