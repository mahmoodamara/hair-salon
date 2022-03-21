import { Component, OnInit } from '@angular/core';
import { Booking } from '../service/booking.model';
import { BookingService } from '../service/booking.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  days:number=0;
  hours:number=0;
  minutes:number=0;
  seconds:number=0;
  countDownDate:number=0
  showmassege:boolean=false;
  users:any=[];
  deleteInList:any=[]
  timers:any=0.;
  length:number=0;
  j:number=0;
  bookhour:any
  bookdate:any

  booking = new Booking();
  constructor(private bookingservice:BookingService,private userservice:UserService) { }

  ngOnInit(): void {
    this.timer();
    this.refreshUsersList();
    this.booking.email=localStorage.getItem('token');
  }
  refreshUsersList(){
    this.bookingservice.getUserBooking().subscribe((res)=>{
      this.users=res; 
      this.length=this.users.length;
      if(this.length>0)
      this.timers = new Date(`${this.users[this.length-1].time}`).getTime();
      let now = new Date().getTime();
      for(let user of this.users){
        let timeOut=new Date(`${user.time}`).getTime();
        if(timeOut<=now){
          this.onDeleteLive(user._id); 
          this.refreshUsersList();
        }
      }
     
      console.log(this.timers)

    });
   }

   bookingtrue(book:Booking):boolean{
     
      this.booking.time=`${this.bookdate}T${this.bookhour}`
      console.log(this.booking.time);
      let fullTime= new Date(`${book.time}`).getTime();
      let now = new Date().getTime();
      if(!((fullTime>now) && fullTime> this.timers )){
        this.refreshUsersList();
            return false;
      }
    return true;

   }

   addbooking(){
    if (this.bookingtrue(this.booking)) {
      this.bookingservice.booking(this.booking,localStorage.getItem('token')).subscribe((res) => {
        this.refreshUsersList();
        this.showmassege = true;

        setTimeout(()=>{                         
          this.showmassege = false;
      }, 3000);
      });
    }
  }
onDelete(user: Booking) {
  
    let f=0;
      if(!((user.email==localStorage.getItem('token')))){
          f=1;
      }
    if(f==0){
      if(confirm('Are you sure to delete this record ?') == true) {
        this.bookingservice.deleteOfBooking(user._id).subscribe((res) => {
        this.refreshUsersList();
    })
  }
    } 
  }
  
  
  onDeleteLive(_id: string) {
      this.bookingservice.deleteOfBooking(_id).subscribe((res) => {
        this.refreshUsersList();
      });
  }
  

  year=new Date().getFullYear();
  month=new Date().getMonth()+1;
  date=new Date().getDate();
  timer(){
    const myfunc = setInterval(()=>{
      //`cart?name=${this.username}`
    let now = new Date().getTime();
    
   
    this.countDownDate = new Date(`${this.year}-0${this.month}-${this.date}T23:59`).getTime();
    var timeleft = this.countDownDate - now;
    this.days= Math.floor(timeleft / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((timeleft % (1000 * 60)) / 1000);   
 
    if(timeleft < 0){
      this.days=0;
      this.hours=0;
      this.minutes=0;
      this.seconds=0;
      this.date++;
    }
    
    }, 1000)
  }
}
