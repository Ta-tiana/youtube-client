import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import {instanceDataService} from "../../service/data.service";


@Component({
  selector: 'app-search',
  template:
  `<div class="search">

    <!-- main-search -->
    <form class="form" [formGroup] = "newSearchRequest" >
      <input class="main-search-input" type="text" formControlName = "searchRequest" placeholder=" What are you want to find out?">
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
          <input class="sort-search-input" type="text" [(ngModel)]="newSortRequest" (ngModelChange)="sortByWord($event)" >
        </li>
      </ul>
    </div>

  </div>`,

  styleUrls: ['./search.component.scss'],
  providers: []
})

export class SearchComponent implements OnInit {
  newSortRequest:any = '';

  constructor(){}
    newSearchRequest = new FormGroup({
    searchRequest: new FormControl("")
  });

  sortByWord(input) {
    instanceDataService.setSortValue(input);
   }

  sortByDate() {
    instanceDataService.setSortByDateClicked();
  }

  sortByViews() {
    instanceDataService.setSortByViewsClicked();
  }

  search() {
    instanceDataService.setInputValue(this.newSearchRequest.value.searchRequest);
  }

  settings(){
    instanceDataService.setSettingsClicked();
  }

  hide() {
    return {hide: !instanceDataService.isSettingsClicked()};
  }


  ngOnInit(): void {
  }
}


