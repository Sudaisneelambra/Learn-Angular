import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
  HostListener,
} from '@angular/core';

import { objects } from './object';
@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnChanges {
  @Input() desiredColor: objects = {
    color: '',
    bgcolor: '',
    fontsize: '',
  };
  @Input() color: string = '';

  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.color= this.desiredColor;
  }

  
  @HostListener('mouseenter')
   onMouseEnter() {
       this.desiredColor.bgcolor = 'white'
    //    console.log(this.desiredColor);
    this.desiredColor.color = 'yellow';
    this.desiredColor.fontsize = '200px';
  }

  ngOnInit(): void {
    this.el.nativeElement.style.color = this.desiredColor.color;
    this.el.nativeElement.style.backgroundColor = this.desiredColor.bgcolor;
    this.el.nativeElement.style.fontSize = this.desiredColor.fontsize;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.el.nativeElement.style.color = this.desiredColor.color;
    this.el.nativeElement.style.backgroundColor = this.desiredColor.bgcolor;
    this.el.nativeElement.style.fontSize = this.desiredColor.fontsize;
  }
}
