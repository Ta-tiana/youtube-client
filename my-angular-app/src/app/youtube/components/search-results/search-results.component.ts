import {Component, OnInit} from '@angular/core';
import {instanceYoutubeService, YoutubeService} from '../../service/youtube.service';
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-search-results',

  template:
  `<div class="cards" *ngIf = "isClicked() === true">
   <!-- cards -->
     <app-search-item *ngFor="let item of youtubeService.getResponseValue()?.items|filteredCards"
       [itemData] = "item">
     </app-search-item>

   </div>
   <div>
     <p style="margin: 20px auto;" class="no-Login" *ngIf = "this.message.length > 0">{{this.message}}</p>
   </div>`,

  styleUrls: ['./search-results.component.scss'],
  providers: []
})

export class SearchResultsComponent implements OnInit {
  message: string = '';

  constructor(public youtubeService: YoutubeService, private authService: AuthService) { }

  public isClicked(): boolean {
    if (instanceYoutubeService.isMainSearchClicked()){

      if (this.authService.isTokenExist('token')){
        return true;
      }
      this.message = 'Пожалуйста, войдите под своим login!';
      console.log(this.message.length);
      return false;
    }
  }

  public ngOnInit(): void {
  }
}

