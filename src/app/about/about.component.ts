import { Component, OnInit } from '@angular/core';
import { Aboutservice } from "../../services/about.service";



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],

})


export class AboutComponent implements OnInit {

   info:any;
   comments: any[] = [];



   commentaire={date:null,message:""} ;




  constructor(private aboutService:Aboutservice) {


      this.info = this.aboutService.getInfo() ;  

      this.comments = this.aboutService.getAllComments();


      }

  ngOnInit() {
  }


  onAddComment(c) {


      this.aboutService.addComment(c) ;

      console.log(c);
      this.commentaire.message ="" ;
      this.comments = this.aboutService.getAllComments();     

  }

}
