import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { LoginComponent } from './components/login/login.component';
import { loggedGuard } from './guards/logged.guard';

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component: HomePageComponent},
  {path:"news", component: NewsListComponent,
  canActivate: [loggedGuard]},
  {path:"login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
