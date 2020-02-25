import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilteredCardsPipe } from "./pipes/filtered-cards.pipe";
import { SearchResultsComponent } from "./components/search-results/search-results.component";
import { SearchItemComponent } from "./components/search-item/search-item.component";
import { MainComponent } from "./pages/main/main.component";
import { DetailedInformationComponent } from "./pages/detailed-information/detailed-information.component";
import { YoutubeDirective } from "./directives/youtube.directive";
import {Page404Component} from "./pages/page404/page404.component";
import {YoutubeRoutingModule} from "./youtube-routing.module";


@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    MainComponent,
    YoutubeDirective,
    DetailedInformationComponent,
    Page404Component,
    FilteredCardsPipe
  ],
  imports: [
    CommonModule, YoutubeRoutingModule
  ],
  exports: [
    SearchResultsComponent, MainComponent, DetailedInformationComponent, FilteredCardsPipe
  ]
})
export class YoutubeModule { }
