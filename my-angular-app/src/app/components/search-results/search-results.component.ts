import {Component, Input, OnInit} from '@angular/core';
import {SearchResults} from '../../models/search-results/search-results.model';
import {instanceDataService} from '../../service/data.service';

@Component({
  selector: 'app-search-results',

  template:
  `<div class="cards" *ngIf = "isClicked() === true">
   <!-- cards -->
     <app-search-item *ngFor="let item of response.items|filteredCards" [itemData] = "item">
     </app-search-item>
   </div>`,

  styleUrls: ['./search-results.component.scss'],
  providers: []
})

export class SearchResultsComponent implements OnInit {

  public response: SearchResults = instanceDataService.getResponseValue();

  constructor() { }

  public isClicked(): boolean {
    return instanceDataService.isMainSearchClicked();
  }

  public ngOnInit(): void {
  }
}
