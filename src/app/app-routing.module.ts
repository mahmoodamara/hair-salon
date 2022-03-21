import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeadminComponent } from './admin/homeadmin/homeadmin.component';
import { NavbaradminComponent } from './admin/navbaradmin/navbaradmin.component';
import { UpdatehomeComponent } from './admin/updatehome/updatehome.component';
import { UsersComponent } from './admin/users/users.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { portfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { SignupComponent } from './signup/signup.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {
    path:'',pathMatch:'full',redirectTo:'login'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'navbar',
    component:NavbarComponent
  },
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'navbaradmin',
    component:NavbaradminComponent,
  },
  {
    path:'homeadmin',
    component:HomeadminComponent,
  },
  {
    path:'updatehome',
    component:UpdatehomeComponent,
  },
  {
    path:'team',
    component:TeamComponent,
  },
  {
    path:'contact',
    component:ContactComponent,
  },
  {
    path:'portfolio',
    component:portfolioComponent,
  },
  {
    path:'services',
    component:ServicesComponent,
  },
  {
    path:'booking',
    component:BookingComponent,
  },
  {
    path:'signup',
    component:SignupComponent,
  },
  {
    path:'users',
    component:UsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
