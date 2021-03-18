import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  //create New User a faire quand la partie acces est fini

  signIn(email: string,password: string){
    return new Promise<void>(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          ()=>{
            resolve();
          },
          (error) => {
            reject(error);
          }
        )
      }
    )
  }

  signOut(){
    firebase.auth().signOut();
  }
}
