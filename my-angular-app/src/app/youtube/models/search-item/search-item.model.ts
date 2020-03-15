class ThumbnailsType {
  public url: string;
  public width: number;
  public height: number;
}
class SnippetThumbnails {
  public default: ThumbnailsType;
  public medium: ThumbnailsType;
  public high: ThumbnailsType;
  public standard: ThumbnailsType;
  public maxres: ThumbnailsType;
}

class SnippetLocalized {
  public title: string;
  public description: string;
}

class Snippet {
  public publishedAt: string;
  public channelId: string;
  public title: string;
  public description: string;
  public thumbnails: SnippetThumbnails;
  public channelTitle: string;
  public tags: string[];
  public categoryId: number;
  public liveBroadcastContent: string;
  public localized: SnippetLocalized;
  public defaultAudioLanguage: string;
}

class ItemStatistic {
  public viewCount: number;
  public likeCount: number;
  public dislikeCount: number;
  public favoriteCount: number;
  public commentCount: number;
}

export class SearchItem {
  public kind: string;
  public etag: string;
  public id: string;
  public snippet: Snippet;
  public statistics: ItemStatistic;
}
