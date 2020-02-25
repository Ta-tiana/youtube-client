import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { instanceYoutubeService } from '../../../youtube/service/youtube.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  template:
  `<div class="search">
    <!-- main-search -->
    <form class="form" [formGroup] = "newSearchRequest" >
      <input class="main-search-input" type="text" formControlName = "searchRequest"
             placeholder=" What are you want to find out?">
<!--      <a routerLink="['results']" routerLinkActive="active"></a>-->
      <button class="main-search" (click)="search()">Search</button>
      <button class="settings" (click)="settings()"></button>
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

  public newSearchRequest: any = new FormGroup({
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
    this.goToResultsPage();
    instanceYoutubeService.setInputValue(this.newSearchRequest.value.searchRequest);
  }

  public settings(): void {
    instanceYoutubeService.setSettingsClicked();
  }

  public hide(): object {
    return { hide: !instanceYoutubeService.isSettingsClicked() };
  }

  public goToResultsPage() {
     return this.router.navigateByUrl('/results');
  }

  public ngOnInit(): void {
  }
}
