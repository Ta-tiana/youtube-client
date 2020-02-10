class ThumbnailsType {
  url: string;
  width: number;
  height: number;
}
class SnippetThumbnails {
  default: ThumbnailsType;
  medium: ThumbnailsType;
  high: ThumbnailsType;
  standard: ThumbnailsType;
  maxres: ThumbnailsType;
}

class SnippetLocalized {
  title: string;
  description: string;
}

class Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: SnippetThumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: number;
  liveBroadcastContent: string;
  localized: SnippetLocalized;
  defaultAudioLanguage: string;
}

class ItemStatistic {
  viewCount: number;
  likeCount: number;
  dislikeCount: number;
  favoriteCount: number;
  commentCount: number;
}

export class SearchItem {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: ItemStatistic;
}
