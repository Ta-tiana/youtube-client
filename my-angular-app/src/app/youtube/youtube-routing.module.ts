import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { DetailedInformationComponent } from './pages/detailed-information/detailed-information.component';
import {AuthGuard} from "../auth/guards/auth-guard/auth.guard";
import {LoadingGuard} from "../auth/guards/loading-guard/loading.guard";

const routes: Routes = [
  {path: '', component: SearchResultsComponent,
  canActivate: [AuthGuard],
  canLoad: [LoadingGuard]},
  {path: ':id', component: DetailedInformationComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class YoutubeRoutingModule { }
