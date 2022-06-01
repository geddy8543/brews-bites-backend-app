import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userResponse: BehaviorSubject<any> = new BehaviorSubject({});
  users: BehaviorSubject<any> = new BehaviorSubject([]);
  
  constructor(private userService: UserService) { }


  ngOnInit(): void {
    this.onGetUsers();
  }

  onGetUsers() {
    this.userService.getUsers().subscribe(
      (response: any) => {
        this.userResponse.next(response);
      },
      (error: any) => console.log(error),
      () => {
        this.users.next(this.userResponse.value)
        console.log(this.userResponse.value)
      }
    )
  }

}
