import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShowEventService } from 'src/app/services/show-event.service';
import { DialogAccesEventComponent } from '../dialog-acces-event/dialog-acces-event.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  event_start !: {
    [key: string]: any
  };

  constructor(private eventService : ShowEventService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogAccesEvent(){
    const dialogRef = this.dialog.open(DialogAccesEventComponent, {
      width: '250px',
      data : {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.id===""){
      }
      else {
        console.log(result);
        this.eventService.fillevent(result.id,result.email,result.password)
      }
    });
  }

}
