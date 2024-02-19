import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-active-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './active-users.component.html',
  styleUrl: './active-users.component.css'
})
export class ActiveUsersComponent implements OnInit{

  users: string[] = [];

  constructor(private usersService: UsersService){}
   
  ngOnInit(){
    this.users = this.usersService.activeUsers;
  }

  setToInActive(id: number) {
    this.usersService.setToInactive(id);
  }
}
