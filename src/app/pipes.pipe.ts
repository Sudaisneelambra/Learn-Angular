import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:'pipes'
})

export class pipe implements PipeTransform{

    transform(value:string):string {

       return value.length>10? `${value.substring(0,10)}...`:value
        
    }

}