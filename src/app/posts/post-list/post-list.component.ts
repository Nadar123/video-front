import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs'
import {Post} from '../post.model';
import {PostsService} from '../posts.service'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  private postSubscription: Subscription
    // {
    //   title: 'First Post',
    //   content: 'This is my first post'
    // },
    // {
    //   title: 'Second Post',
    //   content: 'This is my second post'
    // },
    // {
    //   title: 'Third Post',
    //   content: 'This is my third post'
    // },
    // {
    //   title: 'Four Post',
    //   content: 'This is my four post'
    // }

  constructor(public postsService: PostsService ) { }

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
    this.postSubscription = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
