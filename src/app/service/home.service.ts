import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Home } from './home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseURL: string = 'http://localhost:3000/api/home';
  headers = { 'content-type': 'application/json' };
  constructor(private http : HttpClient) { }
  gethomeinfo():Observable<any>{
    return this.http.get(this.baseURL);
  }

  putHome(home: Home) {
    return this.http.put(this.baseURL + `/${home._id}`, home);
  }
  
}
