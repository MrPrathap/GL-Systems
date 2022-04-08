import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-arena1500-checkout',
  templateUrl: './arena1500-checkout.component.html',
  styleUrls: ['./arena1500-checkout.component.scss']
})
export class Arena1500CheckoutComponent implements OnInit {

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
