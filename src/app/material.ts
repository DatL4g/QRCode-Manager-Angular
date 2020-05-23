import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {BottomNavModule} from 'ngx-bottom-nav';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    BottomNavModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    BottomNavModule
  ]
})
export class MaterialModule { }
