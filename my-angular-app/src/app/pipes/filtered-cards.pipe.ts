import {Pipe, PipeTransform} from '@angular/core';
import {SearchResults} from '../models/search-results/search-results.model';
import {instanceDataService} from '../service/data.service';
import {response} from '../object/object';

@Pipe( {
  name: 'filteredCards',
  pure: false
} )
export class FilteredCardsPipe implements PipeTransform {

  constructor() { }

  public transform( allCards: response.items[] ): SearchResults['items'] {

    if ( instanceDataService.isSortByDateClicked() ) {
      if ( instanceDataService.getSortValue() ) {
        return allCards.filter( card => card.snippet.tags.join()
          .indexOf( instanceDataService.getInputValue() ) !== -1 )
          .filter( card => card.snippet.title.toLowerCase().
          indexOf( instanceDataService.getSortValue() ) !== -1 )
          .sort((dateCard1, dateCard2) => (
            Date.parse( dateCard1.snippet.publishedAt ) - Date.parse( dateCard2.snippet.publishedAt )
          ));
      }
      return allCards.filter( card => card.snippet.tags.join().
      indexOf( instanceDataService.getInputValue() ) !== -1 )
        .sort((dateCard1, dateCard2) => (
            Date.parse( dateCard1.snippet.publishedAt ) - Date.parse( dateCard2.snippet.publishedAt )
        )
      );
    }

    if ( instanceDataService.isSortByViewsClicked() ) {
      if ( instanceDataService.getSortValue() ) {
        return allCards.filter( card => card.snippet.tags.join()
          .indexOf( instanceDataService.getInputValue() ) !== -1 )
          .filter( card => card.snippet.title.toLowerCase()
            .indexOf(instanceDataService.getSortValue() ) !== -1 )
          .sort((viewCard1, viewCard2) => (
            +viewCard1.statistics.viewCount - +viewCard2.statistics.viewCount
          )
        );
      }

      return allCards.filter( card => card.snippet.tags.join()
        .indexOf( instanceDataService.getInputValue() ) !== -1 )
        .sort((viewCard1, viewCard2) => (
            +viewCard1.statistics.viewCount - +viewCard2.statistics.viewCount
        )
      );
    }

    if ( instanceDataService.getSortValue() ) {

      return allCards.filter( card => card.snippet.tags.join()
        .indexOf( instanceDataService.getInputValue() ) !== -1 )
        .filter( card => card.snippet.title.toLowerCase()
          .indexOf(instanceDataService.getSortValue() ) !== -1
      );
    }

    return allCards.filter( card => card.snippet.tags.join()
      .indexOf( instanceDataService.getInputValue() ) !== -1);
  }
}
