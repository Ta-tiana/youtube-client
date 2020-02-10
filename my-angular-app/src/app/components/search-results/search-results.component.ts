import { Component, OnInit } from '@angular/core';
import {SearchResults} from '../../models/search-results/search-results.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  searchResults: SearchResults;

  constructor() { }

  ngOnInit(): void {
  }

}
