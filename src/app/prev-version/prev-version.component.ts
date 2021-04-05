import { RoutingStateService } from './../services/routing-state.service';
import { Component, OnInit } from '@angular/core';
import { BaseAnimate } from '../base-animate/base-animate';

@Component({
  selector: 'app-prev-version',
  templateUrl: './prev-version.component.html',
  styleUrls: ['./prev-version.component.scss']
})
export class PrevVersionComponent extends BaseAnimate implements OnInit {

  constructor(protected routingStateService: RoutingStateService
  ) { super(routingStateService) }
  ngOnInit(): void {
  }

}
