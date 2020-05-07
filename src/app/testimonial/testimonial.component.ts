import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TESTIMONYIMAGES, TESTIMONYTITLES, TESTIMONYJOBS, TESTIMONYTEXT, TESTIMONYCOMPANY } from './testimonial-data';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestimonialComponent implements OnInit {

  testimonyImages = TESTIMONYIMAGES;
  testimonyCompany = TESTIMONYCOMPANY;
  testimonyTitles = TESTIMONYTITLES;
  testimonyJobs = TESTIMONYJOBS;
  testimonyText = TESTIMONYTEXT;

  selectedIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  nextStep() {
    if (this.selectedIndex !== 2) {
      this.selectedIndex = this.selectedIndex + 1;
    }
    console.log(this.selectedIndex);
  }

  previousStep() {
    if (this.selectedIndex != 0) {
      this.selectedIndex = this.selectedIndex - 1;
    }
    console.log(this.selectedIndex);
  }

}
