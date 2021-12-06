export type NewsData = {
    articles?: NewsInfoArticle[];
    sources?: Array<NewsSource>;
};

export type NewsInfoArticle = {
    urlToImage: string;
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    title: string;
    url: string;
    source: {
        id: string;
        name: string;
    };
};

export type NewsSource = {
    id: string;
    name: string;
};

export type GetRespObj = {
    endpoint: string;
    options?: {
        sources?: string;
    };
};

export type URLOptions = {
    [key: string]: string;
};

export type CallBack = <T>(data?: T) => void;
