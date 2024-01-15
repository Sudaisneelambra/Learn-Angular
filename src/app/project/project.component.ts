import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { objects } from '../object';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    OnDestroy
{
  // lyfe cycle hooks

  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  Editcount: number = 0;
  count: number | undefined;
  count1: number | undefined;
  date!:Date

  guys:string="goood morning every one"
  ashan:string="mukthar ibnu abdul azeez"

  title:string="sudais"
  title1:string="SUDAIS"
  price:string='2500'

  amount: number = .4;

  percentageValue:string='0.75'

  @Input() matta!: string;

  jin:object={
    name:"sudais",
    age:21,
    place:"koorad"
  }

  
  @Input() style:objects={
    color: '',
    bgcolor: '',
    fontsize: ''
  }
  
  data: Observable<string> = of('Hello, world!');

  constructor() {
    console.log('Constructore triggered');
  }

  ngOnInit() {
    console.log('ngOnInit triggered');

        // pipes

        this.date=new Date()
        console.log(this.date);

        // pipes
        setTimeout(() => {
          this.data = of('Updated content!');
        }, 2000);

        
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChange triggered', changes);
  }

  ngDoCheck(): void {
    this.count = this.Editcount++;

    console.log(this.count);
  }

  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit triggered `);
  }

  ngAfterContentChecked(): void {
    console.log(`ngAfterContentChecked triggered`);
  }

  ngOnDestroy(): void {
    console.log(`ngOnDestroy triggered`);
  }

  // life cycle hooks

 


  // defference between hostbinding and property binding
  

  textValue:string="hellow world"





// ------------------------------event binding in directive-------

  logvalue(){
    console.log("input has been focused");
    
  }
  
}
