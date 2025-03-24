import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'allCapital'
})
export class AllCapitalPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
