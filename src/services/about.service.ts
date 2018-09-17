
import { Injectable } from "@angular/core" ;

@Injectable()

export class Aboutservice {
	

 info= {
  nom : "Nour" ,
  email : "BenArfanour",
  tel :  21621518700 
  } 


  comments = [
    { date : new Date() , message:"A"},
    { date : new Date() , message:"B" },
    { date : new Date() , message:"C" },
  ] ;	



  commentaire={date:null,message:""} ;


  addComment(c) {

  c.date = new  Date() ;
  this.comments.push(c);
  
  }


  getAllComments() {

  return this.comments ;

  }


 getInfo() {

 return this.info;

 }

}