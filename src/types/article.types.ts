export interface Article {
  source: Source;
  author: string;
  title: string;
  description: null;
  url: string;
  urlToImage: null;
  publishedAt: Date;
  content: null;
}

export interface Source {
  id: string;
  name: string;
}

export interface ArticleListResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}
