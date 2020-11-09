import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {
  isShown1: boolean = false ;
  isShown: boolean = true ;


  toggleShow() {

    this.isShown1 = true;
    this.isShown = false;
   
    
    
    
    }


  constructor() { }

  ngOnInit() {
  }

}
