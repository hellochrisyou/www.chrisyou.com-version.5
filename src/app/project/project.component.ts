import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseAnimate } from '../base-animate/base-animate';
import { RoutingStateService } from '../services/routing-state.service';

import { ImageDialog } from './image-dialog/image-dialog';



@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectComponent extends BaseAnimate implements OnInit {



  constructor(protected routingStateService: RoutingStateService, public dialog: MatDialog) { super(routingStateService) }

  ngOnInit(): void {

  }

  public openDialog(imageName: string): void {
    const dialogRef = this.dialog.open(ImageDialog, {
      width: '100vw',
      data: { tab: imageName }
    });
  }


}
