import { Injectable } from '@angular/core';
import {response} from './../../../assets/object/object';
import {SearchResults} from '../models/search-results/search-results.model';
import {SearchItem} from '../models/search-item/search-item.model';

@Injectable({
  providedIn: 'root'
})

export class YoutubeService {

  public response: SearchResults = response;
  public cardData: SearchItem;

  public inputValue: string = '';
  public sortInputValue: string = '';
  public clicked: boolean = false;
  public settingsClicked: boolean = false;
  public sortByDate: boolean = false;
  public sortByView: boolean = false;
  public week: object = {
    1: 'Sunday',
    2: 'Monday',
    3: 'Thursday',
    4: 'Wednesday',
    5: 'Thursday',
    6: 'Friday',
    7: 'Saturday'
  };

  public publishedTime: string;
  public daysLast: number;
  public past: Date;
  public now: Date;
  public time: number;

  public year: string = '';
  public month: string = '';
  public date: string = '';
  public dayOfWeek: number;
  public isBlue: boolean = false;
  public isGreen: boolean = false;
  public isRed: boolean = false;
  public isYellow: boolean = false;

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

   public getColorByTimeValue(): object {
     this.year = this.publishedTime.slice( 0, 4 );
     this.month = this.publishedTime.slice( 5, 7 );
     this.date = this.publishedTime.slice( 8, 10 );

     this.isBlue = false;
     this.isGreen = false;
     this.isRed = false;
     this.isYellow = false;

     this.past = new Date(+this.year, +this.month, +this.date, 12, 0, 0);
     this.now = new Date();
     this.time = this.now.getTime() - this.past.getTime();

     this.daysLast = Math.floor(this.time / (1000 * 60 * 60 * 24));

     this.dayOfWeek = this.past.getDay();

     if (this.daysLast < 7) {
       this.isBlue = true;

     } else if (this.daysLast >= 7 && this.daysLast <= 30) {
       this.isYellow = true;

     } else if (this.daysLast > 30 && this.daysLast <= 180) {
       this.isGreen = true;

     } else if (this.daysLast > 180) {
       this.isRed = true;
     }

     return {
       blue: this.isBlue,
       green: this.isGreen,
       red: this.isRed,
       yellow: this.isYellow,
     };
   }

  public setPublishedTimeValue(item: any): void {
    this.publishedTime = item.snippet.publishedAt;
  }

  public getYearValue(): string {
      return this.year;
  }

  public getMonthValue(): string {
      return this.month;
  }

  public getDateValue(): string {
      return this.date;
  }

  public getWeekDayInStringValue(day: string): string {
    return this.week[day];
  }

  public getWeekDayInNumberValue(): number {
    return this.dayOfWeek;
  }

  public setCardDataValue(card: any): void {
    this.cardData = card;
  }

  public getCardDataValue(): any {
    return this.cardData;
  }
}

export const instanceYoutubeService: any = new YoutubeService();
