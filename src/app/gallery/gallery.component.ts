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

   tab:Array<>:any
   constructor(private http: HttpClient) { }

  ngOnInit() {

  }


  
  onSearch(dataForm){
  

  	console.log(dataForm);

   this.http.get("https://pixabay.com/api/?key=10132616-1c715792fc727cc043f8fcff8&q="+dataForm.motCle+"&per_page=10&page=1")
      .subscribe(result => {
      this.pagePhotos = result.hits ;
      console.log(this.pagePhotos);
    })
}
