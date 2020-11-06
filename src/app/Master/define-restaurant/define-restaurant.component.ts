import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-define-restaurant',
  templateUrl: './define-restaurant.component.html',
  styleUrls: ['./define-restaurant.component.css']
})
export class DefineRestaurantComponent implements OnInit {
  
  isShown1: boolean = false ;
  isShown: boolean = true ;
  isShownnew: boolean = false ;
  isShownt:boolean = false ;
  isShownx:boolean=false;
  isShownm:boolean=false;
  isShownk:boolean=false;
  isShowng:boolean=false;
  toggleShow() {

    this.isShown1 = true;
    this.isShownk = true;
    this.isShown = false;
    this.isShownt = true;
    this.isShowng = false;
    
    
    
    }


    toggleShow1() {

      this.isShownnew = true;
      this.isShownk = false;
      this.isShownm=true;
      this.isShown1 = false;
      this.isShowng = false;

      }
      toggleShow4() {

        this.isShownnew = false;
        
        this.isShown1 = false;
        this.isShownx = true;
        this.isShowng = true;
        this.isShownm = false;
        
        
  
        }
  constructor() { }

  ngOnInit() {
  }

}
