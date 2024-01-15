import { Directive,ElementRef,HostBinding,HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostbinding]'
})
export class HostbindingDirective {

  constructor(private el:ElementRef ,private render:Renderer2) { }
  @HostBinding('style.backgroundColor') backgrounColor:string='#28282b'
  @HostBinding('style.border') border:string='none'
  @HostBinding('style.color') color:string='white'
  

  @HostListener('mouseenter') mouseEnter(){
    this.backgrounColor='white'
    this.color='#28282b'
    this.border='#28282B 2px solid'
  }

  @HostListener('mouseout') mouseOut(){
    this.backgrounColor='#28282b'
    this.color='white'
    this.border='none'
  }
}
