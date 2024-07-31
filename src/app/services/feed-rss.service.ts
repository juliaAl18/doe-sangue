import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, take } from "rxjs";
import { FeedRss } from "../interfaces/feedRss";
import { environment } from "src/enviroment/environment";

@Injectable({
    providedIn: 'root'
  })
  export class RssFeedService {
  
    private readonly api: string = environment.apiUrl;
  
    constructor(
      private httpClient: HttpClient
    ) { }
  
    getNoticia(): Observable<FeedRss[]> {
        return this.httpClient.get<FeedRss[]>(`${this.api}/feed-rss/noticias`)
        .pipe(take(1));
      }
  }