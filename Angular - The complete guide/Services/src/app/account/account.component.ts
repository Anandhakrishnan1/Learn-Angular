import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export default class AccountComponent {
  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, status: status});
    console.log('A server status changed, new status: ' + status);
  }

  @Input() account!: { name: string; status: string; };
  @Input() id!: number; 
  @Output() statusChanged = new EventEmitter<{id: number, status: string}>();
}
