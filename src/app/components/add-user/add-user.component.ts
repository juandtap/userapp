import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user = new User

  submitted = false

  constructor(private userService: UserService){}


  ngOnInit(): void {
  }

  saveUser(): void{
    const data = {
      name: this.user.name,
      lastname: this.user.lastname,
      country: this.user.country,
      email: this.user.email,
      gender: this.user.gender
    }

    this.userService.create(data).subscribe({
      next: (res) =>{
        console.log(res)
        this.submitted = true
      },
      error: (e) => console.error(e)
    });
  }


  newUser(): void{
    this.submitted = false
    this.user = new User
  }
}
