import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  toggle = false;

  toggleClass(event) {
    this.toggle = !this.toggle;
  }
  constructor() { }

  ngOnInit() {
  }

}
