import {Pipe, PipeTransform, Input} from '@angular/core';
import {SearchResults} from '../models/search-results/search-results.model';
import {instanceYoutubeService} from '../service/youtube.service';
import {SearchItem} from '../models/search-item/search-item.model';

@Pipe( {
  name: 'filteredCards',
  pure: false
} )

export class FilteredCardsPipe implements PipeTransform {

  @Input() public response: SearchResults;

  constructor() { }

  public transform( allCards: SearchItem[] = instanceYoutubeService.getResponseValue().items ):
    SearchResults['items'] {

    if (allCards) {

      if (instanceYoutubeService.isSortByDateClicked()) {
        if (instanceYoutubeService.getSortValue()) {
          return allCards
            .filter(card => card.snippet.title.toLowerCase()
            .indexOf(instanceYoutubeService.getSortValue()) !== -1)
            .sort((dateCard1, dateCard2) => (
              Date.parse(dateCard1.snippet.publishedAt) - Date.parse(dateCard2.snippet.publishedAt)
            )).reverse();
        }
        return allCards
          .sort((dateCard1, dateCard2) => (
              Date.parse(dateCard1.snippet.publishedAt) - Date.parse(dateCard2.snippet.publishedAt)
            )
          ).reverse();
      }

      if (instanceYoutubeService.isSortByViewsClicked()) {
        if (instanceYoutubeService.getSortValue()) {
          return allCards
            .filter(card => card.snippet.title.toLowerCase()
              .indexOf(instanceYoutubeService.getSortValue()) !== -1)
            .sort((viewCard1, viewCard2) => (
                +viewCard1.statistics.viewCount - +viewCard2.statistics.viewCount
              )
            ).reverse();
        }

        return allCards
          .sort((viewCard1, viewCard2) => (
              +viewCard1.statistics.viewCount - +viewCard2.statistics.viewCount
            )
          ).reverse();
      }

      if (instanceYoutubeService.getSortValue()) {

        return allCards
          .filter(card => card.snippet.title.toLowerCase()
            .indexOf(instanceYoutubeService.getSortValue()) !== -1
          );
      }

      if (instanceYoutubeService.clicked) {
        return allCards;

      }
    }
  }
}
