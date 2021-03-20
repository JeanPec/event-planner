import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { Subscription } from 'rxjs';
import { ShowEventService } from './services/show-event.service';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  subscriberShowEvent !: Subscription;
  event_start : {
    [key: string]: any
  } = {};

  title = 'event-planner';

  constructor(private showEventService : ShowEventService,
              private router : Router){
    const firebaseConfig = {
      apiKey: environment.apiKey,
      authDomain: "event-planner-31fde.firebaseapp.com",
      projectId: "event-planner-31fde",
      storageBucket: "event-planner-31fde.appspot.com",
      messagingSenderId: "395061009511",
      appId: "1:395061009511:web:f7e76059b8d130556708c2",
      measurementId: "G-HSK678X668"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    this.event_start.state="home";//a mettre dans la database
    }

    ngOnInit(){
      this.subscriberShowEvent = this.showEventService.subjectPosts.subscribe(
                                    (event : any) =>{
                                      this.event_start=event;//check if it works
                                    }
                                );
      this.showEventService.emitSubject();
      console.log(this.event_start)
    }

    ngOnDestroy(){
      this.subscriberShowEvent.unsubscribe();
    }
}
