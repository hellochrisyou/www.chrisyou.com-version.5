import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
  ngOnInit(): void {
    $('.menu-collapsed').click(function () {
      $(this).toggleClass('menu-expanded');
    });
  }

  getState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
