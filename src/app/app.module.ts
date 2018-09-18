import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' ;
import { Aboutservice } from "../services/about.service";
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';




const appRoutes: Routes = [

{ path: 'about' , component : AboutComponent },
{ path: 'contacts' , component : ContactsComponent },
{ path: 'gallery' , component : GalleryComponent },
{ path:'**' ,redirectTo: '/about', pathMatch : 'full' }


];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    GalleryComponent
  ],
  imports: [

    BrowserModule,FormsModule, HttpClientModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [ Aboutservice ],
  bootstrap: [AppComponent]
})
export class AppModule { }
