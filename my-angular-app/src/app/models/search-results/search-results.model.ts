import {SearchItem} from "../search-item/search-item.model";

class PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export class SearchResults {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: SearchItem[];
}
