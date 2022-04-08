import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-arena11tb-checkout',
  templateUrl: './arena11tb-checkout.component.html',
  styleUrls: ['./arena11tb-checkout.component.scss']
})
export class Arena11tbCheckoutComponent implements OnInit {
  constructor(private _location: Location) { }
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
  }

}
