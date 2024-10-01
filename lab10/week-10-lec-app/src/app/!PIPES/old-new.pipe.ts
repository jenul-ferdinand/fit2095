import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oldNew',
  standalone: true
})
export class OldNewPipe implements PipeTransform {
  transform(value: number, ...args: number[]): string {
    return (value < args[0]) ? "Old" : "New";
  }
}