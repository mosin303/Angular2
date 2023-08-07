import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtar'
})
export class FiltarPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
