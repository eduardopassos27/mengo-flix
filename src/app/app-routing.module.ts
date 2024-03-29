import { WatchComponent } from './pages/watch/watch.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';


const routes: Routes = [

  {path:'Home',component: HomeComponent},
  {path:'',component: HomeComponent},
  {path:'movie/:id',component: MovieDetailsComponent},
  {path:'watch/:id',component: WatchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
