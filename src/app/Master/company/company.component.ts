import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
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
export class CompanyComponent implements OnInit {
  currentState = 'initial';
  name = 'Angular';

  alertWithSuccess(){
    Swal.fire('Saved Successfully', '', 'success')
  }
  columnDefs = [
    //{headerName: 'All', field: '', width: 60, headerCheckboxSelection: true, checkboxSelection: true },
    {headerName: 'Sr. No.', field: 'Srno', width: 80 },
    {headerName: 'Name', field: 'StateId', width: 130,  },
    {headerName: 'Address', field: 'CountryId', width: 130,  },
    {headerName: 'Phone No.', field: 'StateCode', width: 130 },
    {headerName: 'PAN No.', field: 'StateName', width: 150 },
    {headerName: 'GST No', field: 'Country', width: 130 },
    {headerName: 'Location', field: 'location', width: 130 },
    {headerName: 'Created By', field: 'CreatedBy', width: 120 },
    {headerName: 'Created On', field: 'CreatedOn', width: 120 },
    {headerName: 'Updated By', field: 'UpdatedBy', width: 120 },
    {headerName: 'Updated On', field: 'UpdatedOn', width: 120 },
       
];

rowData = [
    { Srno: '1', StateId: 'Yoeki', CountryId: 'Noida-63', StateCode:'90876655438' , StateName:'IFMPS8876A' , Country:'I987868866' , location:'Noida', CreatedBy:'Tarun Sharma',CreatedOn:'28/10/2020',UpdatedBy:'Vishal',UpdatedOn:'28/10/2020'},
    { Srno: '2', StateId: 'Yoeki', CountryId: 'Noida-63', StateCode:'90876655438' , StateName:'IFMPS8876A' , Country:'I987868866' , location:'Noida', CreatedBy:'Tarun Sharma',CreatedOn:'28/10/2020',UpdatedBy:'Vishal',UpdatedOn:'28/10/2020'},
    { Srno: '3', StateId: 'Yoeki', CountryId: 'Noida-63', StateCode:'90876655438' , StateName:'IFMPS8876A' , Country:'I987868866' , location:'Noida', CreatedBy:'Tarun Sharma',CreatedOn:'28/10/2020',UpdatedBy:'Vishal',UpdatedOn:'28/10/2020'},
 ];

  constructor() { }

  ngOnInit() {
  }
  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
}
