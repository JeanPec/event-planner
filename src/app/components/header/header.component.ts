import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  statusShow : boolean = false;

  constructor(public router : Router) { }

  ngOnInit(): void {
  }

  showHide(){
    if(this.statusShow == false){
      document.getElementById("rowsTool")?.classList.remove("hide");
      this.statusShow = true;
    } else {
        document.getElementById("rowsTool")?.classList.add("hide");
        this.statusShow = false;
    }
  }

}
