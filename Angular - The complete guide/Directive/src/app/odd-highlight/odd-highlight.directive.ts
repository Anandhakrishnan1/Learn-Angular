import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOddHighlight]',
  standalone: true
})
export class OddHighlightDirective {

  constructor(private renderer : Renderer2, private elementRef : ElementRef) { }

  ngOnInit(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }
}
