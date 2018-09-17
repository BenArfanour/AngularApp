import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

   constructor(private http: HttpClient) { }

  ngOnInit() {
  }


  onSearch(data){
  

  console.log(data)

    }

}
