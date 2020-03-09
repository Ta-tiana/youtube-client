import {Component, OnInit} from '@angular/core';
import {instanceYoutubeService, YoutubeService} from '../../service/youtube.service';

@Component({
  selector: 'app-search-results',

  template:
  `<div class="cards" *ngIf = "isClicked() === true">
   <!-- cards -->
       <app-search-item *ngFor="let item of youtubeService.getResponseValue()?.items|filteredCards"
         [itemData] = "item">
       </app-search-item>
     </div>`,

  styleUrls: ['./search-results.component.scss'],
  providers: []
})

export class SearchResultsComponent implements OnInit {

  constructor(public youtubeService: YoutubeService) { }

  public isClicked(): boolean {
    return instanceYoutubeService.isMainSearchClicked();
  }

  public ngOnInit(): void {
  }
}
