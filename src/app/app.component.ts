import { Component, Input } from '@angular/core';
import {Post} from './posts/post.model';
// import {MatDialog} from '@angular/material/dialog'
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  checkPageUrl: boolean = false;

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  ];
  storedPosts: Post[] = [];

  onPostAdded(post) {
    this.storedPosts.push(post);
  }

}
