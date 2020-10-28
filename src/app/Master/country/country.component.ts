import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        width: '',
        height: '100%'
      })),
      
      state('final', style({
        width: '100%',
        height: '100%',
        position: 'absolute'
      })),
      transition('initial=>final', animate('500ms')),
      transition('final=>initial', animate('500ms'))
    ]),
    
  ]
})
export class CountryComponent implements OnInit {
  currentState = 'initial';
  columnDefs = [
    {headerName: 'Sr. No.', field: 'Srno' , width: 80 },
    {headerName: 'Country Id', field: 'CountryId',  width: 150, hide:true},
    {headerName: 'Country Code', field: 'CountryCode', width: 150 },
    {headerName: 'Country Name', field: 'CountryName', width: 150},
    {headerName: 'Created By', field: 'CreatedBy', width: 150},
    {headerName: 'Created On', field: 'CreatedOn', width: 150},
    {headerName: 'Last Updated By', field: 'UpdatedBy', width: 150},
    {headerName: 'Last Updated On', field: 'UpdatedOn', width: 170},   
];

rowData = [
    { Srno: '1', CountryCode: '46546', CountryName: 'India', CreatedBy:'Abhishek' , CreatedOn:'25-09-2020' , UpdatedBy:'Vishal' , UpdatedOn:'25-09-2020'},
    { Srno: '2', CountryCode: '46546', CountryName: 'India', CreatedBy:'Abhishek' , CreatedOn:'25-09-2020' , UpdatedBy:'Vishal' , UpdatedOn:'25-09-2020'},
    { Srno: '3', CountryCode: '46546', CountryName: 'India', CreatedBy:'Abhishek' , CreatedOn:'25-09-2020' , UpdatedBy:'Vishal' , UpdatedOn:'25-09-2020'},
   
 ];

  constructor() { }

  ngOnInit() {
  }
  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
}
