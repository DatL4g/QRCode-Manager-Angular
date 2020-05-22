import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import QRScanner from 'qr-scanner';
import * as DetectRTC from 'detectrtc';
import * as global from './../../environments/global';
import {BreakpointObserver} from "@angular/cdk/layout";

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {

  public globals: global.Globals;

  @ViewChild('videoElement') videoElement: ElementRef

  constructor(private breakpointObserver: BreakpointObserver) {
    this.globals = new global.Globals(breakpointObserver);
  }

  ngOnInit(): void {
    if (DetectRTC.hasWebcam) {
      const qrScanner = new QRScanner(this.videoElement.nativeElement, result => console.log('decode qr code: ', result));
      qrScanner.setInversionMode("both");
      qrScanner.start();
      console.log('Has Webcam')
      console.log('Scanner started')
    } else {
      console.log('No Webcam')
    }
  }

}
