import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-book-arena1',
  templateUrl: './book-arena1.component.html',
  styleUrls: ['./book-arena1.component.scss'],
})
export class BookArena1Component implements OnInit {
  constructor(private _location: Location) {}
  backClicked() {
    this._location.back();
  }

  ngOnInit(): void {
    //Initial Animaiton's
    gsap.from('.title-dark', {
      duration: 0.5,
      opacity: 0,
      x: 50,
      delay: 0.5,
    });
    gsap.from('.hero-text', {
      duration: 1,
      opacity: 0,
      y: 0,
      delay: 1.5,
    });
    gsap.from('.tab-container', {
      duration: 1,
      opacity: 0,
      y: 0,
      delay: 2.5,
    });
  }
}
