import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {PostsService} from '../posts.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

interface Catagory{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  
  constructor( public postsService: PostsService, public dialog: MatDialog ) { }

  Catagories: Catagory[] = [
    {value: 'Drama', viewValue: 'Drama'},
    {value: 'Comedy', viewValue: 'Comedy'},
    {value: 'Action', viewValue: 'Action'},
    {value: 'Herror', viewValue: 'Herror'},
    {value: 'Oscar winners', viewValue: 'Oscar winners'}
  ];
  ngOnInit(): void {}

  onAddPost(form: NgForm) {
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
