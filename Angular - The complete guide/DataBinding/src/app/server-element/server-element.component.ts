import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent implements OnInit{
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading',{static: true})header : ElementRef;

  constructor(){
    console.log('constructor called...!')
  }

  ngOnInit(): void {
    console.log('ngOnInit called...!')
    console.log('Server Name :' + this.header.nativeElement.textContent)
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called...!')
    console.log(changes)
  }

  ngDoCheck(){
    console.log('ngDoCheck called...!')
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called...!')
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called...!')
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called...!')
    console.log('Server Name :' + this.header.nativeElement.textContent)

  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called...!')
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called...!')
  }
}
