import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './booking.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  baseURL: string = 'http://localhost:3000/api/bookings';
  headers = { 'content-type': 'application/json' };
  constructor(private http : HttpClient) { }

  getUserBooking():Observable<any>{
    return this.http.get(this.baseURL);
  }


  booking(user: any ,email): Observable<any>{
    return this.http.post(this.baseURL ,user,email);
  }

  deleteOfBooking(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
