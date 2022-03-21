import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  baseURL: string = 'http://localhost:3000/api/menus';
  headers = { 'content-type': 'application/json' };
  constructor(private http : HttpClient) { }

  getMenuinfo():Observable<any>{
    return this.http.get(this.baseURL);
  }
}
