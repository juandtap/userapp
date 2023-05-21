import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from "src/app/models/user.model"

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  users?: User[]

  currentUser: User = {};
  currentIndex = -1;
  name = '';


   constructor(private userService: UserService){

   }
    ngOnInit(): void {
      this.retrieveUsers()
    }

    retrieveUsers(): void {
      this.userService.getAll().subscribe({
          next: (data) => {
            this.users = data;
            console.log(data);
          },
          error: (e) => console.error(e)
        });
      }

      setActiveUser(user: User, index: number): void {
        this.currentUser = user;
        this.currentIndex = index;
      }
    
}
