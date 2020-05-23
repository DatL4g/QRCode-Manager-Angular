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
  @ViewChild('imageInput') imageInput: ElementRef;

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
    }
  }

  processImage(): void {
    const file: File = this.imageInput.nativeElement.files[0];
    const reader = new FileReader();
    let selectedFile: { src: String, file: File };

    reader.addEventListener('load', (event: any) => {
      selectedFile = {
        src: event.target.result,
        file: file
      }

      QRScanner.scanImage(selectedFile.file).then(result => console.log(result))
        .catch(error => console.log(error || 'No QR code found.'));
    });

    reader.readAsDataURL(file);
  }

}
