import {SearchItem} from '../search-item/search-item.model';

class PageInfo {
  public totalResults: number;
  public resultsPerPage: number;
}

export class SearchResults {
  public kind: string;
  public etag: string;
  public pageInfo: PageInfo;
  public items: SearchItem[];
}
