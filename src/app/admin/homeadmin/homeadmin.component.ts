import { Component, NgModule, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Home } from 'src/app/service/home.model';
import { HomeService } from 'src/app/service/home.service';
import { UpdatehomeComponent } from '../updatehome/updatehome.component';

@Component({
  selector: 'app-homeadmin',
  templateUrl: './homeadmin.component.html',
  styleUrls: ['./homeadmin.component.css']
})
export class HomeadminComponent implements OnInit {

  image:string;
  h1:string;
  p:string;
  showmassege:boolean=false;
  home:any=[];
  homes= new Home();
  constructor(private homeservice:HomeService , private matDialog:MatDialog) { }

  ngOnInit(): void {
    this.refreshHomeList();
  }

  refreshHomeList(){
    this.homeservice.gethomeinfo().subscribe((res)=>{
      this.home=res; 
    });
   }

   editHome(home:Home){
    this.homes=home;
}

updateEmploye(){
    this.homeservice.putHome(this.homes).subscribe((res) => {
      this.refreshHomeList();
      this.showmassege = true;
      setTimeout(()=>{                         
        this.showmassege = false;
    }, 3000);
    });
  }



   onOpen(){
      this.matDialog.open(UpdatehomeComponent);
   }
}
