import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  baseURL: string = 'http://localhost:3000/api/portfolios';
  headers = { 'content-type': 'application/json' };
  constructor(private http : HttpClient) { }

  getportfoliosinfo():Observable<any>{
    return this.http.get(this.baseURL);
  }

  
}
