import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOddHighlight]',
  standalone: true
})
export class OddHighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor : string = 'blue';

  constructor(private renderer : Renderer2, private elementRef : ElementRef) { }

  ngOnInit(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'grey');
    this.backgroundColor = 'grey';
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'blue';
  }
}
