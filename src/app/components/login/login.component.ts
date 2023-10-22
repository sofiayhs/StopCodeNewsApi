import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model = new Login()
  errorMsg = ""
  constructor(
    private as: AuthService,
    private router: Router
  ){ }

  login(){
    this.as.login(this.model)
    .pipe(
      catchError((err: HttpErrorResponse)=>{
        this.errorMsg = err.error
        return of(undefined)
      })
    ).subscribe(loggedUser =>{
      if(loggedUser){
        this.as.setLoggedUser(loggedUser)
        this.router.navigate(["/news"])
      }
    })
  }
}
