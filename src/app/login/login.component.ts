import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder ,private router:Router ,private usersservice:UserService) { }

  ngOnInit(): void {
    this.createaddform();    
  }

  createaddform(){
        this.loginForm=this.formBuilder.group({
        email:['',[Validators.required ,Validators.minLength(3)]]
      , password:['',[Validators.required ,Validators.minLength(5)]],
    })
  }


  onSubmit() {
    this.usersservice.signInUser(this.loginForm.value)
      .subscribe(
        res => {
          console.log(this.loginForm.value.email);
          localStorage.setItem('token', this.loginForm.value.email);
          this.router.navigate(['home']);
        },
        err => console.log(err)
      )
  }

}
