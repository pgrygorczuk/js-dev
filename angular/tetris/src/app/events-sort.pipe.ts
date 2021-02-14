import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eventsSort'
})
export class EventsSortPipe implements PipeTransform {

  transform(items: any[], field: string, asc: boolean): any
  {
    return items.sort((a, b) => {
			if( asc )
				return a[field] - b[field];
			else
				return b[field] - a[field];
		});
  }

}
