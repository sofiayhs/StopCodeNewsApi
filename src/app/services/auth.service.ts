import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggedUser, Login } from '../models/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(model: Login): Observable<LoggedUser>{
    return this.http.post<LoggedUser>("http://localhost:3000" + "/login" , model)
  }
  
  setLoggedUser(user: LoggedUser){
    localStorage.setItem("user", JSON.stringify(user))
  }

  getLoggedUser(): LoggedUser | null{
    let userStorage = localStorage.getItem("user")
    if (userStorage != null){
      let u: LoggedUser = JSON.parse(userStorage)
      return u;
    }
    return null
  }
 
  get isUserLogged(): boolean{
    return this.getLoggedUser() != null;
  }

}
