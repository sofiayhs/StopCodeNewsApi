import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  SearchResponse } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private baseURL =   "https://newsapi.org/v2/everything?q="

  /*https://newsapi.org/v2/everything?q=ukraine&apiKey=dff906575a004fa4b22330136867369e*/

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      "X-Api-Key": "9658a4858e2d4e05a0810eafa960e38c"
    })
  }
 
  getArticles(q:string ="us", pageSize:number):Observable<SearchResponse>{
    // https://newsapi.org/v2/everything?q=  &pageSize=
    return this.http.get<SearchResponse>(this.baseURL + q + "&pageSize=" + pageSize, this.httpOptions)

  }
  
 
}
