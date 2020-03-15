import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeService } from '../youtube/service/youtube.service';
import { ModuleWithProviders } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  HeaderComponent, SearchComponent
],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  exports: [
    HeaderComponent
  ]
})

export class CoreModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        YoutubeService,
      ]
    };
  }
}
