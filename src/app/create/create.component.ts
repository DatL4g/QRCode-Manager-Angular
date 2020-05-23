import {Component, OnInit} from '@angular/core';
import {BottomNavItem} from "ngx-bottom-nav";
import * as global from "../../environments/global";
import {BreakpointObserver} from "@angular/cdk/layout";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public globals: global.Globals;

  items: BottomNavItem[] = [
    {icon: 'text_fields', label: 'Text', routerLink: '/create', exact: true},
    {icon: 'signal_wifi_4_bar_lock', label: 'Network', routerLink: '/create/network', exact: true},
  ];

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private route: ActivatedRoute) {
    this.globals = new global.Globals(breakpointObserver);
  }

  ngOnInit(): void {
  }

}
