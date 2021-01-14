import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform
{
  transform(items: any[], field: string, term: string): any
  {
    if( !term || term == 'all' || term == 'any')
      return items;
      
    return items.filter(item => {
      return item[field] == term;
    });
  }
}
