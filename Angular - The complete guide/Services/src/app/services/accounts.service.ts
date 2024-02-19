import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

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
    this.loggingService.logStatus('A new server is created with status: ' + newAccount.status);
  }

  ChangeStatus(updatedInfo: { id: number; status: string }) {
    this.accounts[updatedInfo.id].status = updatedInfo.status;
    this.loggingService.logStatus('A server status is changed, new updated status: ' + updatedInfo.status);
  }

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) { }
}
