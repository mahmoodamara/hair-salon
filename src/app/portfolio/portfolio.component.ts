import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../service/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class portfolioComponent implements OnInit {

  portfolio:any=[];
  title:string;
  constructor(private portfolicoservice:PortfolioService) { }

  ngOnInit(): void {
    this.refreshPortfolioList();
  }
  refreshPortfolioList(){
    this.portfolicoservice.getportfoliosinfo().subscribe((res)=>{
      this.portfolio=res; 
      this.title=this.portfolio[0].title;
    })
   
   
   }
}
