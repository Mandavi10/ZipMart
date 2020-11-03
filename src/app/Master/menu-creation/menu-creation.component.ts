import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-menu-creation',
  templateUrl: './menu-creation.component.html',
  styleUrls: ['./menu-creation.component.css']
})
export class MenuCreationComponent implements OnInit {

     name = 'Angular';
     simpleAlert(){
       Swal.fire('Hello world!');
     }
     
     alertWithSuccess(){
       Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
     }
     
     confirmBox(){
       Swal.fire({
         title: 'Are you sure want to remove?',
         text: 'You will not be able to recover this file!',
         icon: 'warning',
         showCancelButton: true,
         confirmButtonText: 'Yes, delete it!',
         cancelButtonText: 'No, keep it'
       }).then((result) => {
         if (result.value) {
           Swal.fire(
             'Deleted!',
             'Your imaginary file has been deleted.',
             'success'
           )
         } else if (result.dismiss === Swal.DismissReason.cancel) {
           Swal.fire(
             'Cancelled',
             'Your imaginary file is safe :)',
             'error'
           )
         }
       })
     }

 
  columnDefs = [
    {headerName: 'item Name', field: 'Srno', width: 130 },
    {headerName: 'Item Price', field: 'StateId', width: 130,  },
    { headerName: 'Edit', field: 'edit', editable: true, 
       cellRenderer: function(params) {
            return '<i class="fa fa-pencil-square-o" aria-hidden="true"></i>'
       } },
  
       { headerName: 'Edit', field: 'trash', editable: true, 
       cellRenderer: function(params) {
            return '<i class="fa fa-trash" aria-hidden="true"></i>'
       } },
 
       
];

rowData = [
  { Srno: 'Tea', StateId: '20', CountryId: '546', StateCode:'65589' ,},
  { Srno: 'Tea', StateId: '20', CountryId: '546', StateCode:'65589' ,},
  { Srno: 'Tea', StateId: '20', CountryId: '546', StateCode:'65589' ,},
 ];

 columnDefs1 = [
  //{headerName: 'All', field: '', width: 60, headerCheckboxSelection: true, checkboxSelection: true },
  {headerName: 'item Name', field: 'Srno', width: 130 },
  {headerName: 'Item Price', field: 'StateId', width: 130,  },
  { headerName: 'Edit', field: 'edit', editable: true, 
     cellRenderer: function(params) {
          return '<i class="fa fa-pencil-square-o" aria-hidden="true"></i>'
     } },

     { headerName: 'Edit', field: 'trash', editable: true, 
     cellRenderer: function(params) {
          return '<i class="fa fa-trash" aria-hidden="true"></i>'
     } },
     
];

rowData1= [
{ Srno: 'Tea', StateId: '20', CountryId: '546', StateCode:'65589' ,},
{ Srno: 'Tea', StateId: '20', CountryId: '546', StateCode:'65589' ,},
{ Srno: 'Tea', StateId: '20', CountryId: '546', StateCode:'65589' ,},
];


columnDefs3= [
  { headerName: 'Sr.No', field: 'Srno', editable: true,  width: 80,
  cellRenderer: function(params) {
       return '<input type="checkbox"/>'
  } },
  {headerName: 'item Name', field: 'iteam', width: 130 },
  {headerName: 'Item Price', field: 'StateId', width: 130,  },

  

    

     
];

rowData3= [
{ iteam: 'Tea', StateId: '20', },
{ iteam: 'Tea', StateId: '20',},
{ iteam: 'Tea', StateId: '20',},
];

  constructor() { }

  ngOnInit() {
  }

}
