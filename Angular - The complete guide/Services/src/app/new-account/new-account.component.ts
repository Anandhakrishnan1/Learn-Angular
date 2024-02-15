import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-account',
  standalone: true,
  imports: [],
  templateUrl: './new-account.component.html',
  styleUrl: './new-account.component.css',
})
export class NewAccountComponent {
  onCreateAccount(name: string, status: string) {
    this.accountCreated.emit({name: name, status: status});
    console.log('A server status changed, new status: ' + status);
  }

  @Output() accountCreated = new EventEmitter<{name: string, status: string}>();
}
