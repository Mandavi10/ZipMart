import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

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

}
