import { Component, OnInit } from '@angular/core';
declare var $: any;

export interface contentInterface {
  title: string;
  desc: any;
}

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  elem: any;

  ngOnInit() {
    let Expand = (function () {
      let tile = $('.strips__strip');
      let tileLink = $('.strips__strip > .strip__content');
      let tileText = tileLink.find('.strip__inner-text');
      let stripClose = $('.strip__close');

      let expanded = false;

      let open = function () {
        let tile = $(this).parent();

        if (!expanded) {
          tile.addClass('strips__strip--expanded');
          // add delay to inner text
          tileText.css('transition', 'all .5s .3s cubic-bezier(0.23, 1, 0.32, 1)');
          stripClose.addClass('strip__close--show');
          stripClose.css('transition', 'all .6s 1s cubic-bezier(0.23, 1, 0.32, 1)');
          expanded = true;
        }
      };

      let close = function () {
        if (expanded) {
          tile.removeClass('strips__strip--expanded');
          // remove delay from inner text
          tileText.css('transition', 'all 0.15s 0 cubic-bezier(0.23, 1, 0.32, 1)');
          stripClose.removeClass('strip__close--show');
          stripClose.css('transition', 'all 0.2s 0s cubic-bezier(0.23, 1, 0.32, 1)');
          expanded = false;
        }
      };

      let bindActions = function () {
        tileLink.on('click', open);
        stripClose.on('click', close);
      };

      let init = function () {
        bindActions();
      };

      return {
        init: init
      };
    })();

    Expand.init();
  }
}