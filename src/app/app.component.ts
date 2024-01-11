import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { objects } from './object';
import { ProjectComponent } from './project/project.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit{
  
  // life cycle hooks
  array: string[] = ['Sudais', 'shafin', 'shaheer', 'matta', 'shibu', 'palli'];
  title = 'shinu';
  index: number | undefined;
  value: string | undefined;

  collors = ['red', 'green', 'black', 'grey', 'pink', 'blue'];
  collors1 = ['green', 'red', 'blue', 'pink', 'grey', 'black'];
  size = ['20px', '30px', '45px', '50px', '63px', '40px'];




  currentColor:objects={
    color: 'red',
    bgcolor: 'green',
    fontsize: '90px'
  }

  changeValue(lean: HTMLInputElement) {
    this.value = lean.value;
    lean.value = '';

    this.index = Math.floor(Math.random() * 5);
    this.title = this.array[this.index];
    this.currentColor.color = this.collors[this.index]
    this.currentColor.bgcolor = this.collors1[this.index]
    this.currentColor.fontsize = this.size[this.index]


  }


  
  
  //life cycle hooks
  
  @ViewChild(ProjectComponent) childComponent!:ProjectComponent
  
   ngAfterViewInit(): void {

      if (this.childComponent) {
        console.log("sinnan");
        
          this.childComponent.guys = "sinan";
          console.log(this.childComponent.ashan)
        }

      }


  
}
