import {Component, OnInit} from '@angular/core';
import {SearchItem} from '../../models/search-item/search-item.model';
import {instanceYoutubeService} from '../../service/youtube.service';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss']
})
export class DetailedInformationComponent implements OnInit {

  public date: string = instanceYoutubeService.getDateValue();
  public month: string = instanceYoutubeService.getMonthValue();
  public year: string = instanceYoutubeService.getYearValue();
  public numberOfWeekDay: number = instanceYoutubeService.getWeekDayInNumberValue();
  public card: SearchItem = instanceYoutubeService.getCardDataValue();

  constructor() { }

  public getNameOfWeekDay(): string {
    return instanceYoutubeService.getWeekDayInStringValue(this.numberOfWeekDay);
  }

  public getCardColor(): object {
    instanceYoutubeService.setPublishedTimeValue(this.card);
    return instanceYoutubeService.getColorByTimeValue();
  }

  public getUrl(): string {
    return this.card.snippet.thumbnails.high.url;
  }

  public ngOnInit(): void {
  }
}
