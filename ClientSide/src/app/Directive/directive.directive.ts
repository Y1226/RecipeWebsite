import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor(public e: ElementRef) { }
  ngOnInit(): void {
    this.e.nativeElement.style.boxShadow = '5px 3px 10px red'
  }

  @HostListener('blur') f1() {
    if(this.e.nativeElement.value == '')
      this.e.nativeElement.style.boxShadow = '5px 3px 10px red'
    else
      this.e.nativeElement.style.boxShadow = '5px 3px 10px white'
  }
}
