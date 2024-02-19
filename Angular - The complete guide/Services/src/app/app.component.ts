import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import AccountComponent from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountsService } from './services/accounts.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, AccountComponent, NewAccountComponent],
  providers: [AccountsService]
})
export class AppComponent implements OnInit {

  // onAccountcreated(newAccount: { name: string; status: string }) {
  //   this.accounts.push({name: newAccount.name, status: newAccount.status});
  // }
  // onStatusChanged(updatedInfo: { id: number; status: string }) {
  //   this.accounts[updatedInfo.id].status = updatedInfo.status;
  // }

  accounts: {name: string, status: string}[] = [];
  title = 'Services';
  
  constructor(private accountsService: AccountsService){}

  ngOnInit(){
    this.accounts = this.accountsService.accounts;
  }
}
