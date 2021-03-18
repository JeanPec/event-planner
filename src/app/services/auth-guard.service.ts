import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import firebase from "firebase/app"
import 'firebase/auth'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router :Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().onAuthStateChanged(
          (user) => {
            if(user){//autentifié
              console.log("Hello");
              resolve(true);
            } else {//refusé
              console.log("What");
              this.router.navigate(['/home']);
              resolve(false);
            }
          }
        )
      }
    )
  }
}

