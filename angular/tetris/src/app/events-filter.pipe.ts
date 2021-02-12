import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eventsFilter'
})
export class EventsFilterPipe implements PipeTransform
{
  transform(items: any[], field: string, term: string): any
  {
    if( !term || term == 'all' || term == 'any')
      return items;
    
    return items.filter(item => {
      //console.log(item[field]);
      return item[field].toLowerCase().includes(term.toLowerCase());
    });
  }

}
