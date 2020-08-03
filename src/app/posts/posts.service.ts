import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

import {Post} from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [

      {
        title: 'First movie',
        content: 'This is my first post',
        img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        imdb: 'lol'
      },
      {
        title: 'Second Post movie',
        content: 'This is my second post',
        img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        imdb: 'lol'
      },
      {
        title: 'Third Post movie',
        content: 'This is my third post',
        img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        imdb: 'lol'
      },
      {
        title: 'Four Post movie',
        content: 'This is my four post',
        img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        imdb: 'lol'
      }
    ];

  private postsUpdated = new Subject<Post[]>();


  constructor() { }

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string, img: string,  imdb: string) {
    const post: Post = {
      title: title, 
      content: content,
      img: img,
      imdb: imdb
    };
    // this.posts.push(post);
    this.posts.unshift(post);
    this.postsUpdated.next([...this.posts]);
  }
}
