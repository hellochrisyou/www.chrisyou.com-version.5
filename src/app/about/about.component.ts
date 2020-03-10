import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(
      function () {
        $(".left .overlay").animate({ height: 0 + "%" }, 1000, function () {
          $(".right").animate({ width: 33.3333 + "vw" }, 500, function () {
            $(".right .title").animate({ top: 0 + "vw", opacity: 1 }, 500, function () { });
            $(".right .job").animate({ top: 50 + "%", opacity: 0.5 }, 500, function () { });
            $(".right .about").animate({ top: 0 + "vw", opacity: 1 }, 500, function () {
              $("body").removeClass("noscroll");
              $(".right").removeClass("noscroll");
            });
          });
        });
      }, 1500);
  }

}
