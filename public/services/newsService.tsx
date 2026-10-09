import axios from "axios";

export interface NewsItem {
    id: number;
    title: string;
    description: string;
}

type NewsResponse = {
    news: NewsItem[];
}

const GetNews = async () => {
    return axios.get<NewsResponse>("api/news")
}