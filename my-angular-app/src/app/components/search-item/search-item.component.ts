import { Component, Input, OnInit } from '@angular/core';
import {SearchItem} from "../../models/search-item/search-item.model";


@Component({
  selector: 'app-search-item',

  template:
  `<div class="card">
    <!-- card-image -->
    <img class="img" src="{{itemData['snippet']['thumbnails']['medium']['url']}}" alt="" >

    <div class="details">
      <!-- card-statistic -->
      <div class="details-statistic">
        <img src="../../../assets/images/viewed.png" alt=""> <span>&nbsp;{{itemData['statistics']['viewCount']}}&nbsp;</span>
        <img src="../../../assets/images/liked.png" alt=""> <span>&nbsp;{{itemData['statistics']['likeCount']}}&nbsp;</span>
        <img src="../../../assets/images/dislike.png" alt=""> <span>&nbsp;{{itemData['statistics']['dislikeCount']}}&nbsp;</span>
        <img src="../../../assets/images/group.png" alt=""> <span>&nbsp;{{itemData['statistics']['commentCount']}}&nbsp;</span>
       </div>

      <!--card-title -->
       <div class="details-title">
         <p>{{itemData['snippet']['title']}}</p>
       </div>

      <!-- card-button-->
    </div> <div class="details-more">
      <button class="more">More...</button>
      <div [ngClass] = this.getColor()></div>
    </div>

  </div>`,

  styleUrls: ['./search-item.component.scss'],
})

export class SearchItemComponent implements OnInit {

  @Input()  itemData: SearchItem;
  constructor() { }

  publishedTime: string = 'time';

  getPublishedTime(): any {

    this.publishedTime = this.itemData['snippet']['publishedAt'];
  }

   year: string ='';
   day: string = '';
   date: string ='';
   days: number ;
   isBlue:boolean = false;
   isGreen:boolean = false;
   isRed:boolean = false;

   getColor() {
    this.year = this.publishedTime.slice(0, 4);
    this.day = this.publishedTime.slice(5,7);
    this.date = this.publishedTime.slice(8,10);

    this.isBlue = false;
    this.isGreen = false;
    this.isRed = false;

     let past = new Date(+this.year, +this.day, +this.date, 12, 0, 0);
     let now = new Date();
     let time = now.getTime() - past.getTime();

     let days = Math.floor(time / (1000 * 60 * 60 * 24));

     this.days = days;

     if (days < 7) {
       this.isBlue = true;

     } else if (days > 30 && days < 180) {
       this.isGreen = true;

     } else if (days > 180) {
       this.isRed = true;
     }

     return  {
       blue: this.isBlue,
       green: this.isGreen,
       red: this.isRed,
     };

  }

  ngOnInit(): void {
    this.getPublishedTime();
    this.getColor();
  }

}
