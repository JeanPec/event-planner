import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import {} from 'google.maps'
import { AgmCoreModule } from '@agm/core';

import { ShowEventService } from './services/show-event.service';
import { DialogAccesEventComponent } from './components/dialog-acces-event/dialog-acces-event.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { PlaceComponent } from './access/place/place.component';
import { NecessitiesComponent } from './access/necessities/necessities.component';
import { ChoiceComponent } from './access/choice/choice.component';
import { PhotosComponent } from './access/photos/photos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from './services/auth-guard.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DialogAccesEventComponent,
    PlaceComponent,
    NecessitiesComponent,
    ChoiceComponent,
    PhotosComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDZo_aqFLvHvPJcLnjMQOVju33KlbAw8_s'
    }),

    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [ShowEventService,
              AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
