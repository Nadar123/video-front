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
  private postSubscription: Subscription;
  isLoading = false;

  constructor(public postsService: PostsService ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.postsService.getPosts();
    this.postSubscription = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.isLoading = false;
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }

}
