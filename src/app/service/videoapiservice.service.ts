// import { Injectable, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import Video from '../Models/Video';

// @Injectable({
//   providedIn: 'root'
// })
// export class VideoapiserviceService implements OnInit{
 
//   constructor(private http: HttpClient) { }
  
//   // defaultRoute:string = "localhost:7239";
//   defaultRoute:string = "mengoflix-back.onrender.com";

//   ngOnInit(): void {
//     this.bannerData();
//   }

//   bannerResult: Array<Video> = [];

//   GetAll(): Observable<any> {
//     return this.http.get(`https://${this.defaultRoute}/Video`);
//   }

//   GetByID(id:string): Observable<any>{
//     return this.http.get(`https://${this.defaultRoute}/Video/${id}`)
//   }

//   GetByYear(year:string): Observable<any>{
//     return this.http.get(`https://${this.defaultRoute}/Video/search?year=${year}`)
//   }

//   bannerData() {
//       this.GetAll().subscribe((result) => {
      
//       this.bannerResult = result;        
//     });
//   }

  
  

// }
