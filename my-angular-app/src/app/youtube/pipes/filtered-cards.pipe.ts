import {Pipe, PipeTransform} from '@angular/core';
import {SearchResults} from '../models/search-results/search-results.model';
import {instanceYoutubeService} from '../service/youtube.service';
import {response} from '../../../assets/object/object';

@Pipe( {
  name: 'filteredCards',
  pure: false
} )
export class FilteredCardsPipe implements PipeTransform {

  constructor() { }

  public transform( allCards: response.items[] ): SearchResults['items'] {

    if ( instanceYoutubeService.isSortByDateClicked() ) {
      if ( instanceYoutubeService.getSortValue() ) {
        return allCards.filter( card => card.snippet.tags.join()
          .indexOf( instanceYoutubeService.getInputValue() ) !== -1 )
          .filter( card => card.snippet.title.toLowerCase().
          indexOf( instanceYoutubeService.getSortValue() ) !== -1 )
          .sort((dateCard1, dateCard2) => (
            Date.parse( dateCard1.snippet.publishedAt ) - Date.parse( dateCard2.snippet.publishedAt )
          )).reverse();
      }
      return allCards.filter( card => card.snippet.tags.join().
      indexOf( instanceYoutubeService.getInputValue() ) !== -1 )
        .sort((dateCard1, dateCard2) => (
            Date.parse( dateCard1.snippet.publishedAt ) - Date.parse( dateCard2.snippet.publishedAt )
        )
      ).reverse();
    }

    if ( instanceYoutubeService.isSortByViewsClicked() ) {
      if ( instanceYoutubeService.getSortValue() ) {
        return allCards.filter( card => card.snippet.tags.join()
          .indexOf( instanceYoutubeService.getInputValue() ) !== -1 )
          .filter( card => card.snippet.title.toLowerCase()
            .indexOf(instanceYoutubeService.getSortValue() ) !== -1 )
          .sort((viewCard1, viewCard2) => (
            +viewCard1.statistics.viewCount - +viewCard2.statistics.viewCount
          )
        ).reverse();
      }

      return allCards.filter( card => card.snippet.tags.join()
        .indexOf( instanceYoutubeService.getInputValue() ) !== -1 )
        .sort((viewCard1, viewCard2) => (
            +viewCard1.statistics.viewCount - +viewCard2.statistics.viewCount
        )
      ).reverse();
    }

    if ( instanceYoutubeService.getSortValue() ) {

      return allCards.filter( card => card.snippet.tags.join()
        .indexOf( instanceYoutubeService.getInputValue() ) !== -1 )
        .filter( card => card.snippet.title.toLowerCase()
          .indexOf(instanceYoutubeService.getSortValue() ) !== -1
      );
    }

    return allCards.filter( card => card.snippet.tags.join()
      .indexOf( instanceYoutubeService.getInputValue() ) !== -1);
  }
}
