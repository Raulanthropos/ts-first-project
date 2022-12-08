export interface ArticleInterface {
    id: number;
    title: string;
    url: string;
    imageUrl: string;
    newsSite: string;
    summary: string;
    publishedAt: Date;
    updatedAt: Date;
    featured: boolean;
    launches: any[];
    events: any[];
  }
  export interface SingleArticleProp {
    id: number;
  }