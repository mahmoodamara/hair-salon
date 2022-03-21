import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: string = 'http://localhost:3000/api/users';
  headers = { 'content-type': 'application/json' };
  selectEmployee:User;
  username:string;
  email:string=localStorage.getItem('token');
  url:string = `/shearchOfEmail?email=${this.email}`;
  User:any[];
  constructor(private http : HttpClient , private router:Router) { }

  PostUser(user){
    return this.http.post<any>(this.baseURL+'/signup',user,{
      headers: this.headers
    });
  }
  signInUser(user) {
    return this.http.post<any>(this.baseURL + '/login', user,{
      headers: this.headers
    });
  }
  getUserList():Observable<any>{
    return this.http.get(this.baseURL);
  }
  getUser():Observable<any>{
    return this.http.get(this.baseURL+this.url);
  }
  putUser(user: User) {
    return this.http.put(this.baseURL + `/${user._id}`, user);
  }
  deleteUser(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }


}
