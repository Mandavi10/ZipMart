import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

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
    { Srno: '1', StateId: '46546', CountryId: '546', StateCode:'65589' , StateName:'Bihar' , Country:'India' , CreatedBy:'Raj',CreatedOn:'28/10/2020',UpdatedBy:'Rahul',UpdatedOn:'28/10/2020'},
    { Srno: '2', StateId: '46546', CountryId: '54645', StateCode:'65498' , StateName:'Bihar' , Country:'India' , CreatedBy:'Raj',CreatedOn:'28/10/2020',UpdatedBy:'Rahul',UpdatedOn:'28/10/2020'},
    { Srno: '3', StateId: '46546', CountryId: '87999', StateCode:'7989889' , StateName:'Bihar' , Country:'India' , CreatedBy:'Raj',CreatedOn:'28/10/2020',UpdatedBy:'Rahul',UpdatedOn:'28/10/2020'},
   
 ];

  constructor() { }

  ngOnInit() {
  }

}
