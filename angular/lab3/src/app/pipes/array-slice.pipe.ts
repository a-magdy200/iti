import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraySlice'
})
export class ArraySlicePipe implements PipeTransform {

  transform(value: string[], searchValue: string): string[] {
    return value.filter((item) => item.search(searchValue) !== -1);
  }

}
