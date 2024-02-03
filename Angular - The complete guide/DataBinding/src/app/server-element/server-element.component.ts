import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent implements OnInit{
  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor(){
    console.log('constructor called...!')
  }
  ngOnInit(): void {
    
  }
}
