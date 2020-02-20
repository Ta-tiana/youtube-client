import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {instanceDataService} from '../../service/data.service';

@Component({
  selector: 'app-search',
  template:
  `<div class="search">
    <!-- main-search -->
    <form class="form" [formGroup] = "newSearchRequest" >
      <input class="main-search-input" type="text" formControlName = "searchRequest"
             placeholder=" What are you want to find out?">
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

  constructor() { }

  public sortByWord(input: string): void {
    instanceDataService.setSortValue(input);
   }

  public sortByDate(): void  {
    instanceDataService.setSortByDateClicked();
  }

  public sortByViews(): void  {
    instanceDataService.setSortByViewsClicked();
  }

  public search(): void  {
    instanceDataService.setInputValue(this.newSearchRequest.value.searchRequest);
  }

  public settings(): void {
    instanceDataService.setSettingsClicked();
  }

  public hide(): object {
    return { hide: !instanceDataService.isSettingsClicked() };
  }

  public ngOnInit(): void {
  }
}
