import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gl-offline',
  templateUrl: './gl-offline.component.html',
  styleUrls: ['./gl-offline.component.scss']
})
export class GlOfflineComponent implements OnInit {

  constructor() { }
  reloadGL() {
    window.location.reload();
  }
  ngOnInit(): void {


  }

}
