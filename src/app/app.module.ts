import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' ;
import { Aboutservice } from "../services/about.service";
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';



const appRoutes: Routes = [

{ path: 'about' , component : AboutComponent },
{ path: 'contacts' , component : ContactsComponent },
{ path:'**' ,redirectTo: '/about', patchMatch : 'full' }


];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [ Aboutservice ],
  bootstrap: [AppComponent]
})
export class AppModule { }
