import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  accounts = [
    {
      name: 'Admin',
      status: 'active',
    },
    {
      name: 'Test Account',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  CreateAccount(newAccount: { name: string; status: string }) {
    this.accounts.push({name: newAccount.name, status: newAccount.status});
  }

  ChangeStatus(updatedInfo: { id: number; status: string }) {
    this.accounts[updatedInfo.id].status = updatedInfo.status;
  }

  constructor() { }
}
