import { Pipe, PipeTransform } from '@angular/core';
import { Portfolio } from './Portfolio';

@Pipe({ name: 'projectTypeFilter' })
export class ProjectTypeFilterPipe implements PipeTransform {
  transform(portfolios: Portfolio[], projectType: string) {
    if (portfolios) {
      return portfolios.filter(item => item.fields.projectType === projectType);
    }
  }
}
