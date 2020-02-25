import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { DetailedInformationComponent } from "./pages/detailed-information/detailed-information.component";
import { Page404Component } from "./pages/page404/page404.component";
import { MainComponent } from "./pages/main/main.component";

const routes: Routes = [
  { path: '', component: SearchResultsComponent,
      children: [{ path: '/:id', component: DetailedInformationComponent},]},
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
