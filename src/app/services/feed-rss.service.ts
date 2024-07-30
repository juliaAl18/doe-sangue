import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, take } from "rxjs";
import { FeedRss } from "../interfaces/feedRss";

@Injectable({
    providedIn: 'root'
  })
  export class RssFeedService {
  
    private readonly api: string = `http://localhost:3000/api/feed-rss`;
  
    constructor(
      private httpClient: HttpClient
    ) { }
  
    getNoticia(): Observable<FeedRss[]> {
        return this.httpClient.get<FeedRss[]>(`${this.api}/noticias`)
        .pipe(take(1));
      }
  }