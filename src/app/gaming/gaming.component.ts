import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { gsap } from 'gsap';
@Component({
  selector: 'app-gaming',
  templateUrl: './gaming.component.html',
  styleUrls: ['./gaming.component.scss'],
})
export class GamingComponent implements OnInit {
  constructor(private _location: Location) {}
  backClicked() {
    this._location.back();
  }
  

  ngOnInit(): void {
    //Initial Animaiton's
    gsap.from('.title', {
      duration: 0.5,
      opacity: 0,
      x: 50,
      delay: 1,
    });
  }
}
