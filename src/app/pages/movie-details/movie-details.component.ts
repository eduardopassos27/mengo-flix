import { videoService } from './../../service/videoService';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title,Meta } from '@angular/platform-browser';
import Video from 'src/app/Models/Video';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})


export class MovieDetailsComponent implements OnInit {
  

  constructor(private service:videoService,private router:ActivatedRoute, private domSanitizer: DomSanitizer) { }
  getMovieDetailResult:any;
  getMovieVideoResult:any;
  getMovieCastResult:any;

  bannerResult: Array<Video> = [];
  
  ngOnInit(): void {
  
    let getParamId = this.router.snapshot.paramMap.get('id');
    // console.log(getParamId,'getparamid#');
    this.getMovie(getParamId);
    // this.getVideo(getParamId);
    // this.getMovieCast(getParamId);

    // this.bannerResult = this.service.bannerResult;

  }


  getMovie(id:any){
    var result = this.service.GetByID(id)
    this.getMovieDetailResult = result;
    // this.getMovieDetailResult.bannerBase64 = this.domSanitizer.bypassSecurityTrustUrl(this.getMovieDetailResult.bannerBase64)
    // console.log("PosterBase64", this.getMovieDetailResult.posterBase64)
  }

}