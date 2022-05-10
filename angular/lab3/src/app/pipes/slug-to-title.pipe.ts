import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slugToTitle'
})
export class SlugToTitlePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/-/g, ' ');
  }

}
