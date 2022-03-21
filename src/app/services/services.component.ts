import { Component, OnInit } from '@angular/core';
import { MenuService } from '../service/menu.service';
import { PortfolioService } from '../service/portfolio.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  menu:any=[];
  title:string;
  constructor(private menuservice:MenuService) { }

  ngOnInit(): void {
    this.refreshMenuList();
  }
  refreshMenuList(){
    this.menuservice.getMenuinfo().subscribe((res)=>{
      this.menu=res; 
    })
   
   
   }

}
