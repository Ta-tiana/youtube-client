import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { instanceYoutubeService } from '../../../youtube/service/youtube.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, scan, filter } from 'rxjs/operators';
import { HttpSService } from '../../../youtube/service/http-s.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-search',
  template:
  `<div class="search">
      <form class="form">
      <!-- play-movie-->
      <div class="record-set">
        <button class="movie" (click)="record()"></button>
      </div>
      <!-- main-search -->
      <div class="search-set">
        <input class="main-search-input" type="text" [formControl] = "searchRequest"
         (ngModelChange)="redirectMainSearch()"
         (keyup.enter)="keyDownFunction()"
         placeholder=" What are you want to find out?">
        <button class="settings" (click)="settings()"></button>
      </div>
      <!-- user-settings -->
      <div class="user-set">
        <button class="log-in" *ngIf="isLogged() === false" (click)="login()">Log-in</button>
        <button class="log-out" *ngIf="isLogged() === true" (click)="logOut()">Log-out</button>
        <button class="user-settings" (click)="userSettings()"></button>
      </div>
    </form>
    <!-- sort-search -->
    <div class="sorting" [ngClass] = this.hide()>
      <ul class="sorting-type">
        <li class="sort">Sorting by:</li>
        <li class="date" (click)="sortByDate()">date</li>
        <li class="views" (click)="sortByViews()">count of views</li>
        <li class="word" >by word or sentance &nbsp;
          <input class="sort-search-input" type="text"
                 [(ngModel)]="newSortRequest" (ngModelChange)="sortByWord($event)">
        </li>
      </ul>
    </div>
  </div>`,

  styleUrls: ['./search.component.scss'],
  providers: []
})

export class SearchComponent implements OnInit {

  public newSortRequest: string = '';
  public searchRequest = new FormControl();
  public searchValue$: Observable<any>;

  public tokenKey:string = 'AIzaSyA7gD3q9-JIr8YWIuS_joeMPkSuw_lcI-4';

  constructor(public router: Router, private httpService: HttpSService,  private authService: AuthService) {}

  public sortByWord(input: string): void {
    instanceYoutubeService.setSortValue(input);
   }

  public sortByDate(): void  {
    instanceYoutubeService.setSortByDateClicked();
  }

  public sortByViews(): void  {
    instanceYoutubeService.setSortByViewsClicked();
  }

  public keyDownFunction(): void {
   this.redirectMainSearch();
  }

  public redirectMainSearch(): void  {
    instanceYoutubeService.setInputValue(this.searchRequest.value);

    this.searchValue$ = this.searchRequest.valueChanges.pipe(
      filter((query) => query.length > 3 ),
      debounceTime(500),
      scan((acc, typingValue) => typingValue ? acc.concat(typingValue) : [], []),
    );

    this.searchValue$.subscribe(x => {
      this.httpService.g(x, this.tokenKey);
    });

    this.router.navigateByUrl('/results').then(r => (r));
  }

  public settings(): void {
    instanceYoutubeService.setSettingsClicked();
  }

  public hide(): object {
    return { hide: !instanceYoutubeService.isSettingsClicked() };
  }

  public record(): void {
  }

  public userSettings(): void {
  }

  public logOut(): void {
    localStorage.removeItem('token');
  }

  public login(): void {
    this.router.navigateByUrl(`auth/login`).then(r => (r));
  }

  public isLogged(): boolean {
    return this.authService.isTokenExist('token');
  }

  public ngOnInit(): void {

  }
}
