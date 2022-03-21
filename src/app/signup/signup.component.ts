import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup;
  showSucessMessage: boolean;
  actiontime:number;
  constructor(private formBuilder:FormBuilder, private router:Router ,private usersservise:UserService) { }

  ngOnInit(): void {
      this.createaddform();
  }
  createaddform(){
    this.signupForm=this.formBuilder.group({
     username:['',[Validators.required ,Validators.minLength(3)]]
    , email:['',[Validators.required ,Validators.email]]
    , password:['',[Validators.required ,Validators.minLength(5)]],
      phone:['',[Validators.required ,Validators.minLength(10)]],
      date:['',[Validators.required]],
  })

}

onSubmit(){
  this.usersservise.PostUser(this.signupForm.value)
 .subscribe((data)=>{
  localStorage.setItem('token', data.token);
  this.showSucessMessage = true;
  setTimeout(() => this.showSucessMessage = false, 4000);
  this.router.navigate(['home']) ;
   this.signupForm.reset();
 },err=>{
   alert("Somthing went wrong");

 }
 )
}
}
