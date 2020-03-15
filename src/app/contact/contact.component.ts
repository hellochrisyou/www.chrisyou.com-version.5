import { Component, OnInit, AfterViewInit, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  facebook = true;
  linkedIn = false;
  github = false;
  twitter = false;
  instagram = false;

  facebookZ = true;
  linkedInZ = false;
  githubZ = false;
  twitterZ = false;
  instagramZ = false;

  constructor() {
  }

  public ngOnInit(): void {
    this.activateFacebook();
  }

  public activateFacebook(): void {
    this.facebook = true;
    this.github = false;
    this.linkedIn = false;
    this.instagram = false;
    this.twitter = false;

    this.facebookZ = true;
    this.githubZ = false;
    this.linkedInZ = false;
    this.instagramZ = false;
    this.twitterZ = false;

  }
  public activateGithub(): void {
    this.github = true;
    this.facebook = false;
    this.linkedIn = false;
    this.instagram = false;
    this.twitter = false;

    this.githubZ = true;
    this.facebookZ = false;
    this.linkedInZ = false;
    this.instagramZ = false;
    this.twitterZ = false;

  }
  public activateLinkedIn(): void {
    this.linkedIn = true;
    this.facebook = false;
    this.github = false;
    this.instagram = false;
    this.twitter = false;

    this.linkedInZ = true;
    this.githubZ = false;
    this.facebookZ = false;
    this.instagramZ = false;
    this.twitterZ = false;

  }
  public activateInstagram(): void {
    this.instagram = true;
    this.facebook = false;
    this.github = false;
    this.facebookZ = false;
    this.twitter = false;

    this.instagramZ = true;
    this.githubZ = false;
    this.linkedInZ = false;
    this.instagramZ = false;
    this.facebookZ = false;
  }
  public activateTwitter(): void {
    this.twitter = true;
    this.facebook = false;
    this.github = false;
    this.linkedIn = false;
    this.instagram = false;

    this.twitterZ = true;
    this.githubZ = false;
    this.linkedInZ = false;
    this.instagramZ = false;
    this.twitterZ = false;

  }
}
