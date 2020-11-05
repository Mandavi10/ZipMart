import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-running-order',
  templateUrl: './running-order.component.html',
  styleUrls: ['./running-order.component.css']
})
export class RunningOrderComponent implements OnInit {


  columnDefs = [
    {headerName: 'item Name', field: 'itemName', width: 130 },
    {headerName: 'Qty', field: 'Qty', width: 130,  },
    { headerName: 'Status', field: 'Status', editable: true, },
       { headerName: 'Kot Id', field: 'KotId', editable: true,},
       { headerName: 'Action', field: 'Action', editable: true,},  
];

rowData = [
  { itemName: 'Tea', Qty: '2', Status: 'Pending', KotId:'6' , Action:'65589' ,},
  { itemName: 'Tea', Qty: '2', Status: 'Ordered', KotId:'9' , Action:'65589' ,},
  { itemName: 'Tea', Qty: '2', Status: 'Pending', KotId:'5' , Action:'65589' ,},
 ];
  constructor() { }

  ngOnInit() {
  }

}
