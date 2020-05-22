import { Component, OnInit } from '@angular/core';
import { BottomNavItem } from "ngx-bottom-nav";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  items: BottomNavItem[] = [
    {icon: 'home', label: 'Home', routerLink: ''},
    {icon: 'search', label: 'Search', routerLink: 'search'},
    {icon: 'forum', label: 'Forum', routerLink: 'forum'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
