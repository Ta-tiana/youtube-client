import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { instanceYoutubeService } from '../../../youtube/service/youtube.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  template:
  `<div class="search">
    <form class="form" [formGroup] = "newSearchRequest" >
      <!-- play-movie-->
      <div class="record-set">
        <button class="movie" (click)="record()"></button>
      </div>
      <!-- main-search -->
      <div class="search-set">
        <input class="main-search-input" type="text" formControlName = "searchRequest"
               placeholder=" What are you want to find out?">
        <button class="main-search" (click)="search()">Search</button>
        <button class="settings" (click)="settings()"></button>
      </div>
      <!-- user-settings -->
      <div class="user-set">
        <button class="log-out" (click)="logOut()">Log-out</button>
        <button class="user-settings" (click)="userSettings()"></button>
      </div>
    </form>
    <!-- sort-search -->
    <div class="sorting" [ngClass] = this.hide()>
      <ul class="sorting-type">
        <li class="sort">Sorting by:</li>
        <li class="date" (click)="sortByDate()">date</li>
        <li class="views" (click)="sortByViews()">count of views</li>
        <li class="word" >by word or sentance &nbsp;
          <input class="sort-search-input" type="text"
                 [(ngModel)]="newSortRequest" (ngModelChange)="sortByWord($event)">
        </li>
      </ul>
    </div>
  </div>`,

  styleUrls: ['./search.component.scss'],
  providers: []
})

export class SearchComponent implements OnInit {

  public newSortRequest: string = '';
  public newSearchRequest: any = new FormGroup ({
    searchRequest: new FormControl('')
  });

  constructor( public router: Router ) { }

  public sortByWord(input: string): void {
    instanceYoutubeService.setSortValue(input);
   }

  public sortByDate(): void  {
    instanceYoutubeService.setSortByDateClicked();
  }

  public sortByViews(): void  {
    instanceYoutubeService.setSortByViewsClicked();
  }

  public search(): void  {
    instanceYoutubeService.setInputValue(this.newSearchRequest.value.searchRequest);
    this.router.navigateByUrl('/results').then(r => console.log(r));
  }

  public settings(): void {
    instanceYoutubeService.setSettingsClicked();
  }

  public hide(): object {
    return { hide: !instanceYoutubeService.isSettingsClicked() };
  }

  public record(): void {
  }

  public userSettings(): void {
  }

  public logOut(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl(`auth/login`).then(r => console.log(r));
  }

  public ngOnInit(): void {
  }
}
