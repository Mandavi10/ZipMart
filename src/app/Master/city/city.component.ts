import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  columnDefs = [
    {headerName: 'Sr. No.', field: 'Srno' ,valueGetter: "node.rowIndex + 1", width: 80 },
    {headerName: 'State', field: 'StateId', width: 150 ,hide:true},
    {headerName: 'Country', field: 'CountryId', width: 130,hide:true},
    {headerName: 'City Code', field: 'cityCode', width: 150 },
    {headerName: 'City Name', field: 'cityName', width: 150},
    {headerName: 'State', field: 'State', width: 150 },
    {headerName: 'Country', field: 'Country', width: 130},
    {headerName: 'Created By', field: 'CreatedBy', width: 120},
    {headerName: 'Created On', field: 'CreatedOn', width: 120},
    {headerName: 'Last Updated By', field: 'LastUpdatedBy', width: 150},
    {headerName: 'Last Updated On', field: 'LastUpdatedon', width: 150},
   
   
];

bindgrid = [
    { srNo: '1', StateId: '1',  CountryId: '10', cityCode: '46546', cityName: 'Ghaziabad', State: "UP", Country: "India", CreatedBy:'Tarun' , CreatedOn:'25-09-2020' , LastUpdatedBy:'Vishal' , LastUpdatedon:'25-09-2020'},
    { srNo: '2', StateId: '1',  CountryId: '10', cityCode: '46546', cityName: 'Ghaziabad', State: "UP", Country: "India", CreatedBy:'Tarun' , CreatedOn:'25-09-2020' , LastUpdatedBy:'Vishal' , LastUpdatedon:'25-09-2020'},
    { srNo: '3', StateId: '1',  CountryId: '10', cityCode: '46546', cityName: 'Ghaziabad', State: "UP", Country: "India", CreatedBy:'Tarun' , CreatedOn:'25-09-2020' , LastUpdatedBy:'Vishal' , LastUpdatedon:'25-09-2020'},
   
];

  constructor() { }

  ngOnInit() {
  }

}
