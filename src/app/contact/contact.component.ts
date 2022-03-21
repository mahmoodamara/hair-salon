import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';
import { Message } from '../service/message.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact:any=[];

  message = new Message();
  showmassege:boolean=false;

  constructor(private contactservice:ContactService) { }

  ngOnInit(): void {
    this.refreshcontactList();
  }
  refreshcontactList(){
    this.contactservice.getcontactinfo().subscribe((res)=>{
      this.contact=res; 
    })
   }

   addMessage(){
      this.contactservice.postMessage(this.message).subscribe((res) => {
        this.refreshcontactList();
        this.showmassege = true;

        setTimeout(()=>{                         
          this.showmassege = false;
      }, 3000);
      });
    }

}
