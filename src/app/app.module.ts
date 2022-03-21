import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbaradminComponent } from './admin/navbaradmin/navbaradmin.component';
import { HomeadminComponent } from './admin/homeadmin/homeadmin.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdatehomeComponent } from './admin/updatehome/updatehome.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { portfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { BookingComponent } from './booking/booking.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './admin/users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NavbaradminComponent,
    HomeadminComponent,
    UpdatehomeComponent,
    TeamComponent,
    ContactComponent,
    portfolioComponent,
    ServicesComponent,
    BookingComponent,
    SignupComponent,
    LoginComponent,
    UsersComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,

  ],
  entryComponents:[
      UpdatehomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
