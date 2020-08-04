import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash'; 

@Pipe({
  name: 'distinct'
})
export class DistinctPipe implements PipeTransform {

  transform(posts: any): any {
    if(posts!== undefined && posts!== null){
      return _.uniqBy(posts, 'category');
  }
    return posts;
  }
}