import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[myButton]'
})
export class MyButtonDirective implements OnInit {

  @Input('myButton') text!: String;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.text = "MyButton"
  }

  ngOnInit(): void {
      this.renderer.setProperty(this.elementRef.nativeElement, 'className', 'btn btn-secondary');
      this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', this.text);
      //this.elementRef.nativeElement.className = 'btn btn-primary';
  }
  @HostListener('onmouseover') onmouseover(event: Event) {
    this.renderer.setProperty(this.elementRef.nativeElement, 'className', 'btn btn-primary');
  }
  @HostListener('onmouseleave') onmouseleave(event: Event) {
    this.renderer.setProperty(this.elementRef.nativeElement, 'className', 'btn btn-secondary');
  }
}
