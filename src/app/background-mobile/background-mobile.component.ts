import { Component, OnInit } from '@angular/core';
import { BaseAnimate } from '../base-animate/base-animate';
import { RoutingStateService } from '../services/routing-state.service';

@Component({
  selector: 'app-background-mobile',
  templateUrl: './background-mobile.component.html',
  styleUrls: ['./background-mobile.component.scss']
})
export class BackgroundMobileComponent extends BaseAnimate implements OnInit {

  constructor(protected routingStateService: RoutingStateService
  ) { super(routingStateService) }

  ngOnInit(): void {
  }

}
