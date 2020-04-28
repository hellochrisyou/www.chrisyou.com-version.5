import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'Chris You\'s Website';
  clear = 'transparent';
  ngOnInit(): void {
    $('.menu-collapsed').click(function () {
      $(this).toggleClass('menu-expanded');
    });
  }
}
