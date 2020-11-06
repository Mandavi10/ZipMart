import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-kitchen-section',
  templateUrl: './kitchen-section.component.html',
  styleUrls: ['./kitchen-section.component.css']
})
export class KitchenSectionComponent implements OnInit {
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


columnDefs4 = [
 {headerName: 'Code', field: 'Srno', width: 130 },
 {headerName: 'Kitchen Section Name', field: 'StateId', width: 180,  },


    { headerName: 'Action', field: 'Action', editable: true, 
    cellStyle: {color: ' #0a4c58;', }, 
    cellRenderer: function(params) {
         return '<i class="fa fa-plus-circle" aria-hidden="true" data-toggle="modal" data-target="#additeam"></i>'
    } },

    
];

rowData4 = [
{ Srno: 'Hot', StateId: 'Hot Section' ,},
{ Srno: 'Hot', StateId: 'Hot Section' ,},
{ Srno: 'Hot', StateId: 'Hot Section' ,},
{ Srno: 'Hot', StateId: 'Hot Section' ,},

];

columnDefs1 = [
  { headerName: 'All', field: 'Srno',   width: 80,
  cellRenderer: function(params) {
       return '<input type="checkbox"/>'
  } },

  {headerName: 'Item Name', field: 'StateId', width: 180,  },
 
 
     
 ];
 
 rowData1 = [
 { Srno: 'Hot', StateId: 'Hot Section' ,},
 { Srno: 'Hot', StateId: 'Hot Section' ,},
 { Srno: 'Hot', StateId: 'Hot Section' ,},
 { Srno: 'Hot', StateId: 'Hot Section' ,},
 
 ];

 columnDefs8 = [
  { headerName: 'All', field: 'Srno',   width: 80,
  cellRenderer: function(params) {
       return '<input type="checkbox"/>'
  } },

  {headerName: 'Item Name', field: 'StateId', width: 180,  },
 
 
     
 ];
 
 rowData8 = [
 { Srno: 'Hot', StateId: 'Hot Section' ,},
 { Srno: 'Hot', StateId: 'Hot Section' ,},
 { Srno: 'Hot', StateId: 'Hot Section' ,},
 { Srno: 'Hot', StateId: 'Hot Section' ,},
 
 ];
  constructor() { }

  ngOnInit() {
  }

}
