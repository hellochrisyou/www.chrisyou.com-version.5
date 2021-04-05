import { RoutingStateService } from './services/routing-state.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { fadeAnimation } from './animation';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {
  title = 'Chris You\'s Website';
  clear = 'transparent';

  constructor(public router: Router, public routingStateService: RoutingStateService) { }
  ngOnInit(): void {
    $('.menu-collapsed').click(function () {
      $(this).toggleClass('menu-expanded');
    });
  }

  getState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  public navigateHome(): void {
    setTimeout(() => {
      this.router.navigateByUrl('/home');
    }, 500);
  }

  public navigateBackground(): void {
    this.routingStateService.isFadeOut = true;
    setTimeout(() => {
      this.routingStateService.isFadeOut = false;
      this.router.navigateByUrl('/background');
    }, 500);
  }


  public navigateRecording(): void {
    this.routingStateService.isFadeOut = true;
    setTimeout(() => {
      this.routingStateService.isFadeOut = false;
      this.router.navigateByUrl('/recording');
    }, 500);
  }


  public navigateProject(): void {
    this.routingStateService.isFadeOut = true;
    setTimeout(() => {
      this.routingStateService.isFadeOut = false;
      this.router.navigateByUrl('/project');
    }, 500);
  }


  public navigatePrevVersion(): void {
    this.routingStateService.isFadeOut = true;
    setTimeout(() => {
      this.routingStateService.isFadeOut = false;
      this.router.navigateByUrl('/previous-versions');
    }, 500);
  }


  public toggleVisiblity(): void {
    this.routingStateService.isFadeOut = true;
    setTimeout(() => {
      this.routingStateService.isFadeOut = false;
      this.router.navigate(['/Shared/Confirmation-page']);
    }, 500);
  }
}
