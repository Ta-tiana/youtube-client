import { Injectable } from '@angular/core';
import {response} from '../object/object';
import {SearchResults} from '../models/search-results/search-results.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  public response: SearchResults = response;

  public inputValue: string = '';
  public sortInputValue: string = '';
  public clicked: boolean = false;
  public settingsClicked: boolean = false;
  public sortByDate: boolean = false;
  public sortByView: boolean = false;

  constructor() { }

   public getResponseValue(): SearchResults {
    return this.response;
  }

   public setInputValue(inputValue: string): void {

    this.inputValue = inputValue;
    this.sortByDate = false;
    this.sortByView = false;

    if (this.inputValue) {
      this.clicked = true;
    }
  }

   public getInputValue(): string {
    return this.inputValue;
  }

   public setSortValue(sortInputValue: string): void {
    this.sortInputValue = sortInputValue;
    this.sortByDate = false;
    this.sortByView = false;
  }

   public getSortValue(): string {
    return this.sortInputValue;
  }

   public setSortByDateClicked(): void {
    this.sortByDate = true;
    this.sortByView = false;
  }

   public isSortByDateClicked(): boolean {
    return this.sortByDate;
  }

   public setSortByViewsClicked(): void {
    this.sortByView = true;
    this.sortByDate = false;
  }

   public isSortByViewsClicked(): boolean {
    return this.sortByView;
  }

   public setSettingsClicked(): void {
    this.settingsClicked = !this.settingsClicked;
  }

   public isSettingsClicked(): boolean {
    return this.settingsClicked;
  }

   public isMainSearchClicked(): boolean {
    return this.clicked;
  }
}

export const instanceDataService: any = new DataService();
