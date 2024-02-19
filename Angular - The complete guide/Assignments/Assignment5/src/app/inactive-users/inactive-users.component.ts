import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-inactive-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inactive-users.component.html',
  styleUrl: './inactive-users.component.css'
})
export class InactiveUsersComponent implements OnInit{

  users: string[] = [];

  constructor(private usersService: UsersService){}
   
  ngOnInit(){
    this.users = this.usersService.inactiveUsers;
  }

  setToActive(id: number) {
    this.usersService.setToActive(id);
  }
}
