import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
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
export class LocationComponent implements OnInit {
  name = 'Angular';

  alertWithSuccess(){
    Swal.fire('Saved Successfully', '', 'success')
  }
  columnDefs = [
    {headerName: 'Sr. No.', field: 'Srno' ,valueGetter: "node.rowIndex + 1", width: 80 },
    {headerName: 'Name', field: 'StateId', width: 150 ,},
    {headerName: ' Address', field: 'Address', width: 130,},
    {headerName: 'State', field: 'State', width: 150 },
    {headerName: 'City', field: 'city', width: 150 },
    {headerName: 'Country', field: 'Country', width: 130},
    {headerName: 'Created By', field: 'CreatedBy', width: 120},
    {headerName: 'Created On', field: 'CreatedOn', width: 120},
    {headerName: 'Last Updated By', field: 'LastUpdatedBy', width: 150},
    {headerName: 'Last Updated On', field: 'LastUpdatedon', width: 150},
   
   
];

bindgrid = [
    { srNo: '1', StateId: 'Abc',  Address: 'Noida', State: '46546', city: 'Ghaziabad', Country: "India", CreatedBy:'Tarun' , CreatedOn:'25-09-2020' , LastUpdatedBy:'Vishal' , LastUpdatedon:'25-09-2020'},
    { srNo: '2', StateId: 'Demo',  Address: 'Noida', State: '46546', city: 'Ghaziabad', Country: "India", CreatedBy:'Tarun' , CreatedOn:'25-09-2020' , LastUpdatedBy:'Vishal' , LastUpdatedon:'25-09-2020'},
    { srNo: '3', StateId: 'Yoeki',  Address: 'Noida', State: '46546', city: 'Ghaziabad', Country: "India", CreatedBy:'Tarun' , CreatedOn:'25-09-2020' , LastUpdatedBy:'Vishal' , LastUpdatedon:'25-09-2020'},
];

  constructor() { }

  ngOnInit() {
  }

}
