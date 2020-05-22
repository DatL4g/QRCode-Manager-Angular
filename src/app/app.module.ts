import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScanComponent } from './scan/scan.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    ScanComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
