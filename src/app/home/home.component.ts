import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  image:string;
  h1:string;
  p:string;
  home:any=[];
  username:any;
  infouser:any=[];

  constructor(private homeservice:HomeService , private userservice:UserService) { }

  ngOnInit(): void {
    this.refreshEmployeeList();
    this.getUser();
  }

  refreshEmployeeList(){
    this.homeservice.gethomeinfo().subscribe((res)=>{
      this.home=res;
      this.h1=this.home[0].h1;
      this.p=this.home[0].p;
      this.image=this.home[0].photo;
     
   
    })
   
   
   }

   getUser(){
      this.userservice.getUser().subscribe((res)=>{
        this.infouser=res;
        this.username=this.infouser[0].username;
        console.log(this.username);
      })
   }

   logout() {
     this.userservice.logout();
    
  }

}
