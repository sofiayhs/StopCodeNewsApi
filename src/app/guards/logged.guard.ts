import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export const loggedGuard: CanActivateFn = (route, state) => {
  const as = inject(AuthService)
  const router = inject(Router)
  const snackBar = inject(MatSnackBar)

  if(!as.isUserLogged){
    router.navigate(["/login"])
    snackBar.open("Effettua l'accesso per vedere i contenuti", "OK")
    return false
  }
  return true;
};
