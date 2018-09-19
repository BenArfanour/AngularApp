import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],


})

export class GalleryComponent implements OnInit {

   pagePhotos:any;


   currentPage:number=1 ;
   size:number=12;
   pages:Array<number>=[];
   totalPages:number;
   constructor(private http: HttpClient) { }

  ngOnInit() {

  }


  
  onSearch(dataForm){
  

  	console.log(dataForm);

       this.http.get("https://pixabay.com/api/?key=10132616-1c715792fc727cc043f8fcff8&q="+dataForm.motCle+"&per_page="+this.size+"&page="+this.currentPage)
       .subscribe(result => {
       this.pagePhotos = result ;


         
       this.totalPages = result.totalHits/this.size ;

       console.log(this.totalPages);

       if (result.totalHits % this.size != 0) {++this.totalPages ;}
       this.pages=new Array(this.totalPages) ;

       console.log(this.pages);

       })
  
    }







}
