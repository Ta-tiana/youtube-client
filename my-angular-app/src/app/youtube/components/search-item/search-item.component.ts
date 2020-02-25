import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from '../../models/search-item/search-item.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-search-item',

  template:
  `<div class="card">
    <!-- card-image -->
    <img class="img" src="{{itemData['snippet']['thumbnails']['medium']['url']}}" alt="" >
    <div class="details">
      <!-- card-statistic -->
      <div class="details-statistic">
        <img src="../../../../assets/images/viewed.png" alt="">
        <span>&nbsp;{{itemData['statistics']['viewCount']}}&nbsp;</span>
        <img src="../../../../assets/images/liked.png" alt="">
        <span>&nbsp;{{itemData['statistics']['likeCount']}}&nbsp;</span>
        <img src="../../../../assets/images/dislike.png" alt="">
        <span>&nbsp;{{itemData['statistics']['dislikeCount']}}&nbsp;</span>
        <img src="../../../../assets/images/group.png" alt="">
        <span>&nbsp;{{itemData['statistics']['commentCount']}}&nbsp;</span>
       </div>
      <!--card-title -->
       <div class="details-title">
         <p>{{itemData['snippet']['title']}}</p>
       </div>
      <!-- card-button-->
    </div> <div class="details-more">
      <button class="more" (click)="goToDetailedInfo()">More...</button>
<!--    <button class="more"><a [routerLink]="['', itemData.id]" routerLinkActive="active">More...</a> </button>-->
<!--    (click) = "goToDetailedInfo()"-->
      <div [ngClass] = this.getColor()></div>
    </div>

  </div>`,

  styleUrls: ['./search-item.component.scss'],
})

export class SearchItemComponent implements OnInit {

  @Input()  public itemData: SearchItem;

  public cardId: string;
  public publishedTime: string;
  public daysLast: number;
  public past: Date;
  public now: Date;
  public time: number;

  public year: string = '';
  public day: string = '';
  public date: string = '';
  public days: number;
  public isBlue: boolean = false;
  public isGreen: boolean = false;
  public isRed: boolean = false;
  public isYellow: boolean = false;

  constructor( private router: Router ) { }

  public getColor(): object {
    this.publishedTime = this.itemData.snippet.publishedAt;

    this.year = this.publishedTime.slice( 0, 4 );
    this.day = this.publishedTime.slice( 5, 7 );
    this.date = this.publishedTime.slice( 8, 10 );

    this.isBlue = false;
    this.isGreen = false;
    this.isRed = false;
    this.isYellow = false;


    this.past = new Date(+this.year, +this.day, +this.date, 12, 0, 0);
    this.now = new Date();
    this.time = this.now.getTime() - this.past.getTime();

    this.daysLast = Math.floor(this.time / (1000 * 60 * 60 * 24));

    this.days = this.daysLast;

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

  goToDetailedInfo(){
    this.cardId = this.itemData.id;
    this.router.navigate([this.cardId]).then(r => console.log(r)) ;
    // this.router.navigateByUrl(`/${this.cardId}`).then(r => console.log(r)) ;
  }

  public ngOnInit(): void {

  }
}
