import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { LoginComponent } from './components/login/login.component';
import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomePageComponent,
    NewsListComponent,
    LoginComponent,
    ArticlePreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue:{ duration: 2500}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
