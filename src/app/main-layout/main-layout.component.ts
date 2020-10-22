import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  toggle = false;
  public sidebarMinimized = false;
  public navItems = true;
  showSideNav = true;
  toggleNav(){
    this.showSideNav = !this.showSideNav;
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  toggleClass(event) {
    this.toggle = !this.toggle;
  }
  constructor() { }

  ngOnInit() {
  }

}
