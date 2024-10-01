import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcAge',
  standalone: true
})
export class CalcAgePipe implements PipeTransform {

  transform(value: number, ...args: any[]): number {
    let theAge = (new Date()).getFullYear()-value;
    return theAge;
  }

}
