import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOddHighlight]',
  standalone: true
})
export class OddHighlightDirective {
  @Input('defaultColor') defaultColor: string = 'blue';
  @Input('highLightColor') highLightColor: string = 'grey';
  @HostBinding('style.backgroundColor') backgroundColor : string = '';

  constructor(private renderer : Renderer2, private elementRef : ElementRef) { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'grey');
    this.backgroundColor = this.highLightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
  }
}
