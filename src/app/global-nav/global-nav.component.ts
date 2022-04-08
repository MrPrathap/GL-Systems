import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoaderService } from '../loader/loader.service';
import { gsap } from 'gsap';

@Component({
  selector: 'Geniland-global-nav',
  templateUrl: './global-nav.component.html',
  styleUrls: ['./global-nav.component.scss']
})
export class GlobalNavComponent implements OnInit{
  @Output() public sidenavToggle = new EventEmitter();
  constructor(public loaderService: LoaderService) {}
  ngOnInit(): void {
    //Initial Animaiton's
    //Big screen

    gsap.from(".anime-1", {
      duration: 1,
      opacity: 0,
      x: -30,
      stagger: 0.2,
      delay: 0.5,
    });
    gsap.from(".anime-2", {
      duration: 1,
      opacity: 0,
      x: -30,
      stagger: 0.2,
      delay: 1,
    });
    gsap.from(".anime-3", {
      duration: 1,
      opacity: 0,
      x: -30,
      stagger: 0.2,
      delay: 1.5,
    });
    gsap.from(".anime-4", {
      duration: 1,
      opacity: 0,
      x: 0,
      stagger: 0.2,
      delay: 2,
    });
    gsap.from(".anime-5", {
      duration: 1,
      opacity: 0,
      x: 30,
      stagger: 0.2,
      delay: 1.5,
    });
    gsap.from(".anime-6", {
      duration: 1,
      opacity: 0,
      x: 30,
      stagger: 0.2,
      delay: 1,
    });
    gsap.from(".anime-7", {
      duration: 1,
      opacity: 0,
      x: 30,
      stagger: 0.2,
      delay: 0.5,
    });
  //Initial Animaiton's
  //small screen
    gsap.from(".logo-anime", {
      duration: 1.5,
      opacity: 0,
      x: 0,
      stagger: 0.2,
      delay: 1,
    });
    gsap.from(".hamburger-anime", {
      duration: 0.5,
      opacity: 0,
      x: 100,
      stagger: 0.2,
      delay: 0.5,
    });
    gsap.from(".menu-anime", {
      duration: 0.5,
      opacity: 0,
      x: -100,
      stagger: 0.2,
      delay: 0.5,
    });
  }
  public onTogglerSidenav = () => {
    this.sidenavToggle.emit();
  }
}
