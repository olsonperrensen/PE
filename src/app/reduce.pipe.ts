import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce'
})
export class ReducePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.substring(0,150)+'...';
  }

}
