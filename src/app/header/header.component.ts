import { Component, OnInit } from '@angular/core';
// import {MatDialog} from '@angular/material/dialog'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { PostCreateComponent } from '../posts/post-create/post-create.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // typesOfShoes: string[] = ['הוספת סרט', 'דרמה ', 'אקשן', 'קומדיה', 'אימה', 'יציאה'];
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog (): void {
    this.dialog.open(PostCreateComponent);
  }
}
