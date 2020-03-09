import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SearchResults} from '../models/search-results/search-results.model';
import {YoutubeService} from './youtube.service';

@Injectable({
  providedIn: 'root'
})
export class HttpSService {
  public responseItems: SearchResults;

  constructor(private http: HttpClient, private youtubeService: YoutubeService) {
    this.http = http;
  }

  public g(searchKey: string, tokenKey: string): any {
    console.log(3);
    const obj: any = this.http.get(`https://www.googleapis.com/youtube/
    v3/search?part=snippet&key=${tokenKey}&q=${searchKey}&maxResults=50`);

    obj.subscribe(response => {
      // @ts-ignore
      response.pageInfo.resultsPerPage = 50;
      // @ts-ignore
      const ids: any = response.items.map((item) => item.id.videoId
        || item.id.playlistId);

      this.http.get(`https://www.googleapis.com/youtube/v3/
      videos?id=${ids.join(',')}&maxResults=1&part=snippet,
      contentDetails,statistics,status&key=${tokenKey}`)
        .subscribe(res => {
          // @ts-ignore
          this.responseItems = res;
          this.youtubeService.setResponseValue(this.responseItems);
        });
    });
  }
}
