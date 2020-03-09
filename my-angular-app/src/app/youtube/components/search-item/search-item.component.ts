import { Component, Input, OnInit} from '@angular/core';
import { SearchItem } from '../../models/search-item/search-item.model';
import { Router } from '@angular/router';
import { instanceYoutubeService } from '../../service/youtube.service';

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
        <span>&nbsp;{{getString(itemData['statistics']['viewCount'])}}&nbsp;</span>
        <img src="../../../../assets/images/liked.png" alt="">
        <span>&nbsp;{{getString(itemData['statistics']['likeCount'])}}&nbsp;</span>
        <img src="../../../../assets/images/dislike.png" alt="">
        <span>&nbsp;{{getString(itemData['statistics']['dislikeCount'])}}&nbsp;</span>
        <img src="../../../../assets/images/group.png" alt="">
        <span>&nbsp;{{getString(itemData['statistics']['commentCount'])}}&nbsp;</span>
       </div>
      <!--card-title -->
       <div class="details-title">
         <p style="text-overflow: ellipsis;">{{itemData['snippet']['title']}}</p>
       </div>
      <!-- card-button-->
    </div> <div class="details-more">
      <button class="more" (click)="goToDetailedInfo()">More...</button>
    <div [ngClass] = this.getColor()></div>
    </div>

  </div>`,

  styleUrls: ['./search-item.component.scss'],
})

export class SearchItemComponent implements OnInit {

  @Input()  public itemData: SearchItem;
  public cardId: string;

  constructor( private router: Router) { }

  public getColor(): object {
    instanceYoutubeService.setPublishedTimeValue(this.itemData);
    return instanceYoutubeService.getColorByTimeValue();
  }

  public goToDetailedInfo(): void {
    instanceYoutubeService.setCardDataValue(this.itemData);
    this.cardId = this.itemData.id;
    this.router.navigateByUrl(`results/${this.cardId}`).then(r => console.log(r)) ;
  }

  public getString(value: number): string {
    const str: string = String(value);

    if (str === 'undefined') {
      return '0';
    }

    return str.length > 3 ? str.slice(0, -3) + 'K' : str;
  }

  public ngOnInit(): void {
  }
}
