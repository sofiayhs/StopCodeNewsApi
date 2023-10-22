import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit{
 articles: Article[] = []
  searchInput= ""
  constructor(public ns: NewsService){ }

  ngOnInit(): void {
    this.ns.getArticles(this.searchInput,10).subscribe(articles =>{
      this.articles = articles.articles;
        })    
  }
  
  onSearch(keyword:string){
    this.ns.getArticles(keyword,10).subscribe(articles =>{
      this.articles = articles.articles;
    })
  }
}