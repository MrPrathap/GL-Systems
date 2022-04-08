import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { gsap } from 'gsap';
import { MatDialog } from '@angular/material/dialog';
import { UsbDialogComponent } from '../usb-dialog/usb-dialog.component';
import { BluetoothDialogComponent } from '../bluetooth-dialog/bluetooth-dialog.component';
import { AudioDialogComponent } from '../audio-dialog/audio-dialog.component';
import { WifiDialogComponent } from '../wifi-dialog/wifi-dialog.component';
import { LanDialogComponent } from '../lan-dialog/lan-dialog.component';
import { RgbDialogComponent } from '../rgb-dialog/rgb-dialog.component';

@Component({
  selector: 'app-arena1',
  templateUrl: './arena1.component.html',
  styleUrls: ['./arena1.component.scss']
})
export class Arena1Component implements OnInit {
  constructor(private matDialog: MatDialog, private _location: Location) {}

  backClicked() {
    this._location.back();
  }

//USB dialog modal opening
  openUSBDialog() {
    this.matDialog.open(UsbDialogComponent);
  }
//Bluetooth dialog modal opening
  openBluetoothDialog() {
    this.matDialog.open(BluetoothDialogComponent);
  }
//Audio dialog modal opening
  openAudioDialog() {
    this.matDialog.open(AudioDialogComponent);
  }
//WiFi dialog modal opening
  openWifiDialog() {
    this.matDialog.open(WifiDialogComponent);
  }
//LAN dialog modal opening
  openLANDialog() {
    this.matDialog.open(LanDialogComponent);
  }
//RGB dialog modal opening
  openRGBDialog() {
    this.matDialog.open(RgbDialogComponent);
  }
//---------------------------------------------------------------------
  ngOnInit():void {
   //Animaiton's

    gsap.from(".title", {
      duration: 0.5,
      opacity: 0,
      x: 50,
      delay: 1,
    });
    gsap.from(".buy-button", {
      duration: 0.5,
      opacity: 0,
      x: 50,
      delay: 1,
    });
    gsap.from(".animator", {
      duration: 1.5,
      opacity: 0,
      y: 0,
      delay: 2.5,
    });
    gsap.from(".Arena-1-compliment", {
      duration: 1.5,
      opacity: 0,
      y: 0,
      delay: 3.0,
    });
  }//ngOnit close tag
}
