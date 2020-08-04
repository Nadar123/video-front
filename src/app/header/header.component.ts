import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PostCreateComponent } from '../posts/post-create/post-create.component';
import {PostsService} from '../posts/posts.service';
import { Subscription } from 'rxjs'
import {Post} from '../posts/post.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  posts: Post[] = [];
  private postSubscription: Subscription

  constructor(
    public postsService: PostsService,
     public dialog: MatDialog) { }

  ngOnInit(): void {
    this.postsService.getPosts();
    this.postSubscription = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }
  openDialog (): void {
    this.dialog.open(PostCreateComponent);
  }
}
