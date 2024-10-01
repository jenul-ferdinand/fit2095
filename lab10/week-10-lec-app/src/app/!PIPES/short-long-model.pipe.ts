import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortLongModel',
  standalone: true
})
export class ShortLongModelPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    return  (value.length < args[0]) ? "Short" : "Long";
  }

}
