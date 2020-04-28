import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ImageDialog } from './image-dialog/image-dialog';



@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectComponent implements OnInit {



  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  public openDialog(imageName: string): void {
    const dialogRef = this.dialog.open(ImageDialog, {
      width: '100vw',
      data: { tab: imageName }
    });
  }


}
