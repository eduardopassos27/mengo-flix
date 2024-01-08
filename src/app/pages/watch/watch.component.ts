import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})


export class WatchComponent implements OnInit{

  constructor(private router:ActivatedRoute,){  }

  id: any;

  playerConfig = {
    controls: 0,
    mute: 1,
    autoplay: 1
  };

  ngOnInit(): void {

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    let getParamId = this.router.snapshot.paramMap.get('id');
    this.id = getParamId;

   
    
  }
  onReady(e:any): void {
    console.log(e, 'its ready')
  }
  

}
