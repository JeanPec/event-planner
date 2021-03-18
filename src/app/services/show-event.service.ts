import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ShowEventService {

  event_start : {
    [key: string]: any
  } = {};
  subjectPosts = new Subject<any>();

  constructor(private authService: AuthService,
              private router : Router) { 
    this.event_start.state="home";
  }

  emitSubject(){
    return this.subjectPosts.next(this.event_start);
  }

  fillevent(id_event : string,email : string,password : string){
    //check if id and password exist
    //check on the database if it exist
    this.event_start.id=id_event;
    this.event_start.email=email;
    this.authService.signIn(email,password).then(
      () => {this.router.navigate(["/access",id_event])},
      (error) => {
        console.log(error);
      }
    )
    
    this.emitSubject();
  }
}
