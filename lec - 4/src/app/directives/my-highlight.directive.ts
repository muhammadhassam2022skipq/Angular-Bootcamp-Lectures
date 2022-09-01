import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class MyHighlightDirective {
  @Input('myHighlight') highlightColor!: String;
  @HostBinding('style.backgroundColor') backgroundColor: String = 'transparent';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.highlightColor = "yellow"
  }

  ngOnInit(): void {
      this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'transparent');
      //this.elementRef.nativeElement.className = 'btn btn-primary';
  }
  @HostListener('mouseover') onmouseover(event: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', this.highlightColor);
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') onmouseleave(event: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'transparent');
    this.backgroundColor = 'transparent';
  }
}
