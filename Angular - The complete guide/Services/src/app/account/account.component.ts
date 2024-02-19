import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
  providers: [LoggingService]
})
export default class AccountComponent {
  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, status: status});
    this.loggingService.logStatus('A server status is changed, new updated status: ' + status);
  }

  constructor(private loggingService: LoggingService){}

  @Input() account!: { name: string; status: string; };
  @Input() id!: number; 
  @Output() statusChanged = new EventEmitter<{id: number, status: string}>();
}
