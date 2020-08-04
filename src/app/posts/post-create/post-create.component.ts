import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {PostsService} from '../posts.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CatagoriesService} from '../catagories.service';
// import {Catagory} from '../catagory.model'

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  isLoading = false;
  constructor( 
    public postsService: PostsService, 
    public dialog: MatDialog,
    public catagoriesService: CatagoriesService ) { }
    public categories: any;


  ngOnInit(): void {
    this.isLoading = true;
    this.catagoriesService.getCatagories().subscribe(res => {
      this.categories = res;
      this.isLoading = false;
      debugger;
    })
  }

  // ngOnInit(): void {
  //   this.isLoading = true;
  //   this.postsService.getPosts();
  //   this.postSubscription = this.postsService.getPostUpdateListener()
  //     .subscribe((posts: Post[]) => {
  //       this.isLoading = false;
  //       this.posts = posts;
  //     });
  // }
  // .subscribe((posts: Post[]) => {
  //   this.isLoading = false;
  //   this.posts = posts;
  // });

  onAddPost(form: NgForm) {
    this.isLoading = true;
    if(form.invalid) {
      return;
    }
    this.postsService.addPost(
      form.value.id,
      form.value.title, 
      form.value.category, 
      form.value.img,
      form.value.imdb 
      );
    form.resetForm();
    this.dialog.closeAll();
  }

  close() {
    this.dialog.closeAll();
  }
}
