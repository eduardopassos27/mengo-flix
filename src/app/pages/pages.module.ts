import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RouterModule } from '@angular/router';
import { WatchComponent } from './watch/watch.component';
import { YouTubePlayerModule } from '@angular/youtube-player'



@NgModule({
  declarations: [
    HomeComponent,
    MovieDetailsComponent,
    WatchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    YouTubePlayerModule
  ],
  exports:[
    HomeComponent
  ]
})
export class PagesModule { }
