import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerTwoNumbers'
})
export class PowerTwoNumbersPipe implements PipeTransform {

  transform(x: number, y: number): number {
    return x ^ y;
  }

}
