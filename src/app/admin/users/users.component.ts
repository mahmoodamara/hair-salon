import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/service/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any=[];
  showmassege:boolean;
  user=new User();
  constructor(private usersericse:UserService ) { }

  ngOnInit(): void {
    this.refreshUsersList();
  }

  refreshUsersList(){
    this.usersericse.getUserList().subscribe((res)=>{
      this.users=res; 
    })
  }

  addUser(){
    if(!this.user._id){
    this.usersericse.PostUser(this.user).subscribe((res) => {
      this.refreshUsersList();
      this.showmassege = true;

      setTimeout(()=>{                         
        this.showmassege = false;
    }, 3000);
    });
  }
  else{
    this.usersericse.putUser(this.user).subscribe((res) => {
      this.refreshUsersList();
      this.showmassege = true;

      setTimeout(()=>{                         
        this.showmassege = false;
    }, 3000);
  })
  }
}
onDelete(_id: string) {
  if (confirm('Are you sure to delete this record ?') == true) {
    this.usersericse.deleteUser(_id).subscribe((res) => {
      this.refreshUsersList();
    });
  }
}


editUser(user:User){
    this.user=user;
}

}
