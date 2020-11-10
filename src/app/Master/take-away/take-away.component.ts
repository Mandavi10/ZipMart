import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-take-away',
  templateUrl: './take-away.component.html',
  styleUrls: ['./take-away.component.css']
})
export class TakeAwayComponent implements OnInit {


  columnDefs = [
    {headerName: 'item Name', field: 'itemName', width: 130 },
    {headerName: 'Price', field: 'Price', width: 130,  },
    { headerName: 'Qty', field: 'Qty', editable: true, },
       { headerName: 'Kot No.', field: 'KotNo', editable: true,},
       { headerName: 'Add', field: 'Add', editable: true,},  
       { headerName: 'Sub', field: 'Sub', editable: true,}, 
       { headerName: 'Delete', field: 'Delete', editable: true,},
];

rowData = [
  { itemName: 'Tea', Price: '2', Qty: 'Pending', KotNo:'6' , Add:'1', Sub:'1', Delete:'1'},
  
 ];
  constructor() { }

  ngOnInit() {
  }

}
