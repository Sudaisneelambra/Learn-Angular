import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSample]'
})
export class SampleDirective {

  constructor() { }



   // defference between hostbinding and property binding

   @HostBinding('value') inputValue:string="hey there"


   @HostListener('focus') logmessage(){
    console.log("input has been focused from directive");
    
   }
}
