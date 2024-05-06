import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(date:Date): unknown {
    debugger
    if(date.getHours() > 5 && date.getHours() < 13)
      return 'Good Morning'
    if(date.getHours() > 13 && date.getHours() < 18)
      return 'Good Afternoon'
    return 'Good Night'
  }

}
