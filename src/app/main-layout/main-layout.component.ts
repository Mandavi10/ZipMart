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
  showPOSNav = false;
  
  toggleNav(){
    this.showSideNav = !this.showSideNav;
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  toggleClass(event) {
    this.toggle = !this.toggle;
  }
  constructor(router: Router) {
    router.events.subscribe(event => {
      if (router.url === '/Home') {
        this.showSideNav = false;
        this.showPOSNav = true;
      }
       if (router.url === '/SectionTable') {
        this.showSideNav = false;
        this.showPOSNav = true;

      }
      if (router.url === '/MenuCreation') {
        this.showSideNav = false;
        this.showPOSNav = true;
      }

        if (router.url === '/DefineRestaurant') {
          this.showSideNav = false;
          this.showPOSNav = true;
        }
        if (router.url === '/EmployeeDetails') {
          this.showSideNav = false;
          this.showPOSNav = true;
        }

        if (router.url === '/Addon') {
          this.showSideNav = false;
          this.showPOSNav = true;
        }
        if (router.url === '/KitchenSection') {
          this.showSideNav = false;
          this.showPOSNav = true;
        }
        if (router.url === '/KitchenScreen') {
          this.showSideNav = false;
          this.showPOSNav = false;
        }
        if (router.url === '/CustomerLoyalty') {
          this.showSideNav = false;
          this.showPOSNav = true;
        }
        if (router.url === '/CustomerCoupon') {
          this.showSideNav = false;
          this.showPOSNav = true;
        }
        

        if (router.url === '/Payment') {
          this.showSideNav = false;
          this.showPOSNav = false;
        }
        if (router.url === '/RunningOrder') {
          this.showSideNav = false;
          this.showPOSNav = false;

        }
        if (router.url === '/NewOrder') {
          this.showSideNav = false;
          this.showPOSNav = true;

        }
    });
  }

  ngOnInit() {
  }

}

