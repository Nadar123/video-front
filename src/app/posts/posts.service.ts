import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Subject} from 'rxjs';
import { map } from 'rxjs/operators';

import {Post} from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private postsUpdated = new Subject<Post[]>();
  private posts: Post[] = [];
    
  constructor(private http: HttpClient) { }

  getPosts() {
    this.http.get<{message: string, posts: any}>('http://localhost:3000/api/movies')
    .pipe(map((postData) => {
      return postData.posts.map(post => {
        return {
          title: post.title, 
          category: post.category,
          img: post.img,
          imdb: post.imdb,
          id: post._id
        };
      });
    }))
    .subscribe((newPost) => {
      this.posts = newPost;
      this.postsUpdated.next([...this.posts]);

    });
  }

  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }

  addPost( id: string,title: string, category: string, img: string, imdb: string) {
    const post: Post = {id: null, title: title, category: category,img: img, imdb: imdb};
    
    this.http.post<{message: string, postId: string}>('http://localhost:3000/api/movies', post)
      .subscribe((resData) =>{
        const id = resData.postId;
        post.id = id;
        this.posts.unshift(post);
        this.postsUpdated.next([...this.posts]);
      });
  }

  deletePost(postId: string) {
    this.http.delete(`http://localhost:3000/api/movies/${postId}`)
      .subscribe(() => {
        const updatedPost = this.posts.filter(post =>  post.id !== postId);
        this.posts = updatedPost;
        this.postsUpdated.next([...this.posts]);
      })
  }
}
