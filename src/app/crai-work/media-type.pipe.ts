import { Pipe, PipeTransform } from '@angular/core';
import { Media } from './Portfolio';

@Pipe({ name: 'mediaTypeFilter' })
export class MediaTypeFilterPipe implements PipeTransform {
  transform(media: Media[], mediaType: string) {
    if (media) {
      return media.filter(item => item.fields.mediaType === mediaType);
    }
  }
}
