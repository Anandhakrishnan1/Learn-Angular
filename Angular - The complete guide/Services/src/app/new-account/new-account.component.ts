import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-new-account',
  standalone: true,
  imports: [],
  templateUrl: './new-account.component.html',
  styleUrl: './new-account.component.css',
  providers: [LoggingService]
})
export class NewAccountComponent {
  onCreateAccount(name: string, status: string) {
    this.accountsService.CreateAccount({name: name, status: status});
    //this.accountCreated.emit({name: name, status: status});
    this.loggingService.logStatus('A new server is created with status: ' + status);
  }
  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService){}

  // @Output() accountCreated = new EventEmitter<{name: string, status: string}>();
}
