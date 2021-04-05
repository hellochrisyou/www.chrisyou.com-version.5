import { Component, OnInit } from '@angular/core';
import { BaseAnimate } from '../base-animate/base-animate';
import { RoutingStateService } from '../services/routing-state.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseAnimate implements OnInit {

  constructor(protected routingStateService: RoutingStateService
  ) {
    super(routingStateService)
  }

  ngOnInit(): void {
    this.routingStateService.hasLanded = true;
    $('.drop-down').animate({ top: '0px' }, 200);
  }

}
