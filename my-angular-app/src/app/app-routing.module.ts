import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "./youtube/pages/main/main.component";
import { Page404Component } from "./youtube/pages/page404/page404.component";

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'results', loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule)},
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  { path: 'page404', component: Page404Component},
  //{ path: '**', redirectTo: '/page404'},
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})

export class AppRoutingModule { }
