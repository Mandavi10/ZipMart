import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css'],
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
export class StateComponent implements OnInit {
  currentState = 'initial';
  columnDefs = [
    //{headerName: 'All', field: '', width: 60, headerCheckboxSelection: true, checkboxSelection: true },
    {headerName: 'Sr. No.', field: 'Srno', width: 80 },
    {headerName: 'State Id', field: 'StateId', width: 130, hide:true },
    {headerName: 'Country Id', field: 'CountryId', width: 130, hide:true },
    {headerName: 'State Code', field: 'StateCode', width: 130 },
    {headerName: 'State Name', field: 'StateName', width: 150 },
    {headerName: 'Country', field: 'Country', width: 130 },
    {headerName: 'Created By', field: 'CreatedBy', width: 120 },
    {headerName: 'Created On', field: 'CreatedOn', width: 120 },
    {headerName: 'Updated By', field: 'UpdatedBy', width: 120 },
    {headerName: 'Updated On', field: 'UpdatedOn', width: 120 },
       
];

rowData = [
    { Srno: '1', StateId: '46546', CountryId: '546', StateCode:'65589' , StateName:'Uttar Pradesh' , Country:'India' , CreatedBy:'Raj',CreatedOn:'28/10/2020',UpdatedBy:'Rahul',UpdatedOn:'28/10/2020'},
    { Srno: '2', StateId: '46546', CountryId: '54645', StateCode:'65498' , StateName:'Uttar Pradesh' , Country:'India' , CreatedBy:'Raj',CreatedOn:'28/10/2020',UpdatedBy:'Rahul',UpdatedOn:'28/10/2020'},
    { Srno: '3', StateId: '46546', CountryId: '87999', StateCode:'7989889' , StateName:'Uttar Pradesh' , Country:'India' , CreatedBy:'Raj',CreatedOn:'28/10/2020',UpdatedBy:'Rahul',UpdatedOn:'28/10/2020'},
   
 ];

  constructor() { }

  ngOnInit() {
  }
  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
}
