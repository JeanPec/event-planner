import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})



export class PlaceComponent implements OnInit {

  info : [{
    [key: string]: any
  }] = [{}];
  lat= 51;
  long=7;

  constructor() {
    this.info.push({icon: "place", content: "52 rue Principale Artolsheim"});
    this.info.push({icon: "query_builder", content: "18h-4h"});
    this.info.push({icon: "today", content: "samedi 12 janvier"});
   }

  ngOnInit(): void {
  }

}
