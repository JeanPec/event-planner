import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChoiceComponent } from './access/choice/choice.component';
import { NecessitiesComponent } from './access/necessities/necessities.component';
import { PhotosComponent } from './access/photos/photos.component';
import { PlaceComponent } from './access/place/place.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [{ path: 'access/:id/photos', component: PhotosComponent,canActivate: [AuthGuardService]},
                        { path: 'access/:id/choice', component: ChoiceComponent,canActivate: [AuthGuardService]},
                        { path: 'access/:id/necessities', component: NecessitiesComponent,canActivate: [AuthGuardService]},
                        { path: 'access/:id/place', component: PlaceComponent,canActivate: [AuthGuardService]},
                        { path: 'access/:id', component: PlaceComponent,canActivate: [AuthGuardService]},
                        { path: 'home', component: HomeComponent},
                        { path: 'notFound', component: NotFoundComponent},
                        { path: '', redirectTo: 'home', pathMatch: 'full'},
                        { path: '**', redirectTo: 'notFound'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
