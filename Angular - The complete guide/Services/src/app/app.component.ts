import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import AccountComponent from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, AccountComponent, NewAccountComponent],
})
export class AppComponent {
  onAccountcreated(newAccount: { name: string; status: string }) {
    this.accounts.push({name: newAccount.name, status: newAccount.status});
  }
  onStatusChanged(updatedInfo: { id: number; status: string }) {
    this.accounts[updatedInfo.id].status = updatedInfo.status;
  }
  accounts = [
    {
      name: 'Admin',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];
  title = 'Services';
}
