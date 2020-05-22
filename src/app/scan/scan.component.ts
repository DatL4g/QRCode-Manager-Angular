import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import QRScanner from './../../assets/javascript/qr-scanner.min.js';
import * as DetectRTC from 'detectrtc';
import * as global from './../../environments/global';
import {BreakpointObserver} from "@angular/cdk/layout";

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit, AfterViewInit {

  public globals: global.Globals;
  public qrScanner: QRScanner;

  @ViewChild('videoInput') videoInput: ElementRef;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.globals = new global.Globals(breakpointObserver);
  }

  ngOnInit(): void {
    QRScanner.WORKER_PATH = './../../assets/javascript/qr-scanner-worker.min.js';
  }

  ngAfterViewInit(): void {
    this.qrScanner = new QRScanner(this.videoInput.nativeElement, result => console.log('decode qr code: ', result));
    this.qrScanner.setInversionMode("both");

    if (DetectRTC.hasWebcam) {
      this.qrScanner.start();
      console.log('Has Webcam');
      console.log('Scanner started')
    } else {
      console.log('No Webcam');
    }
  }

}
