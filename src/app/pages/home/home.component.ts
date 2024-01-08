import { Component, OnInit } from '@angular/core';
import Video from 'src/app/Models/Video';
import { videoService } from 'src/app/service/videoService';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: videoService) {
    
    
   }

  bannerResult: Array<Video> = [];
  Season2022: Array<Video> = [];
  Season2020: Array<Video> = [];
  Season2019: Array<Video> = [];

  ngOnInit(): void {
    this.bannerData();
    this.Get2022Season();
    this.Get2020Season();
    this.Get2019Season();

  }
  

  bannerData() {
    var array = ["6aS9YlA3-gk","xp50MFmKAQs","ZB6FHKj_lqg","IJojfT3KpC0"];
    array.forEach(element => {
      var result = this.service.GetByID(element)  
      this.bannerResult.unshift(result);      
    });
    
  }

  Get2022Season() {
    var result = this.service.GetByYear(2022)
    this.Season2022 = result;
  }
  Get2020Season() {
    var result = this.service.GetByYear(2020)
    this.Season2020 = result;
  }
  Get2019Season() {
    var result = this.service.GetByYear(2019);
    this.Season2019 = result;
  }


}
