import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss'],
})
export class ArenaComponent implements OnInit {
  constructor() {}
  Arena1share() {
    if (navigator.share) {
      navigator
        .share({
          title: 'Take a look at Arena 1 only in GL Computer Reserve',
          url: 'http://localhost:4200/Arena-1',
        })
        .then(() => {
          console.log('Thanks for sharing...');
        })
        .catch(console.error);
    }
  }

  ngOnInit(): void {

    gsap.from('.animator', {
      duration: 0.5,
      opacity: 0,
      y: 0,
      delay: 2.5,
    });

    gsap.from('.title-animation', {
      duration: 0.5,
      opacity: 0,
      y: 0,
      delay: 3.5,
    });

    gsap.from('.subject-animation', {
      duration: 0.5,
      opacity: 0,
      y: 0,
      delay: 3.6,
    });

    gsap.from('.price-animation', {
      duration: 0.5,
      opacity: 0,
      y: 0,
      delay: 3.7,
    });

    gsap.from('.divider-animation', {
      duration: 0.5,
      opacity: 0,
      y: 0,
      delay: 4,
    });

    gsap.from('.option-btn-animation', {
      duration: 0.5,
      opacity: 0,
      y: 30,
      delay: 4.5,
    });

    gsap.from('.book-button-animation', {
      duration: 0.5,
      opacity: 0,
      y: 30,
      delay: 4.7,
    });
  }
}
