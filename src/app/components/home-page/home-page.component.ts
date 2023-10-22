import { Component } from '@angular/core';
import { Article } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  articles: Article[] = []

  constructor(public ns: NewsService){ }

  ngOnInit(): void {
    this.ns.getArticles("top-headlines",10).subscribe(articles =>{
      this.articles = articles.articles;

        })    
  }
}
