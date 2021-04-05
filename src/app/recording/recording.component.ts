import { Component, OnInit } from '@angular/core';
import { BaseAnimate } from '../base-animate/base-animate';
import { RoutingStateService } from '../services/routing-state.service';
declare var $: any;
@Component({
  selector: 'app-recording',
  templateUrl: './recording.component.html',
  styleUrls: ['./recording.component.scss']
})
export class RecordingComponent extends BaseAnimate implements OnInit {
  constructor(protected routingStateService: RoutingStateService
  ) { super(routingStateService) }
  ngOnInit() {

  }
}
