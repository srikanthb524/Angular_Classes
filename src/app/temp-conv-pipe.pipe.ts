import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConvPipe',
})
export class TempConvPipePipe implements PipeTransform {
  transform(value: number, units: string) {
    if (value && !isNaN(value)) {
      if (units === 'C') {
        var temp = (value - 32) / 1.8;
        return temp.toFixed(2);
      }
      else if(units==='F')
      {
        var temp = (value*1.8)+32;
        return temp.toFixed(2);
      }
    }
    return ;
  }
}
