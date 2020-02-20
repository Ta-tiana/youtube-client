import { Injectable } from '@angular/core';
import {response} from "../object/object";
import {SearchResults} from '../models/search-results/search-results.model';
import {SearchItem} from "../models/search-item/search-item.model";



@Injectable({
  providedIn: 'root'
})
export class DataService {

  response: SearchResults = response;

  private inputValue: string = '';
  private sortInputValue: string = '';
  private clicked: boolean = false;
  private settingsClicked: boolean = false;
  private SortByDate: boolean = false;
  private SortByView: boolean = false;

  constructor() {
  }

  getResponseValue(): SearchResults {
    return this.response;
  }

  setInputValue(inputValue: string) {

    this.inputValue = inputValue;
    this.SortByDate = false;
    this.SortByView = false;

    if (this.inputValue) {
      this.clicked = true;
    }

  }

  getInputValue(): string {
    return this.inputValue;
  }


  setSortValue(sortInputValue: string) {
    this.sortInputValue = sortInputValue;
    this.SortByDate = false;
    this.SortByView = false;
  }

  getSortValue(): string {
    return this.sortInputValue;
  }


  setSortByDateClicked() {
    this.SortByDate = true;
    this.SortByView = false;

  }

  isSortByDateClicked(): boolean {
    return this.SortByDate;
  }

  setSortByViewsClicked() {
    this.SortByView = true;
    this.SortByDate = false;
  }

  isSortByViewsClicked(): boolean {
    return this.SortByView;
  }

  setSettingsClicked() {
    this.settingsClicked = !this.settingsClicked;
  }

  isSettingsClicked(): boolean {
    return this.settingsClicked;
  }

  isMainSearchClicked(): boolean {
    return this.clicked;
  }

}



export const instanceDataService = new DataService();
