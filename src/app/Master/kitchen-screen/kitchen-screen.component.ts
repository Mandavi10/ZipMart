import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchen-screen',
  templateUrl: './kitchen-screen.component.html',
  styleUrls: ['./kitchen-screen.component.css']
})
export class KitchenScreenComponent implements OnInit {



  
columnDefs1 = [


  {headerName: 'Item Name', field: 'iteamname', width: 180,  },
  {headerName: 'Add On', field: 'addon', width: 180, 
  cellRenderer: function(params) {
    return '<i class="fa fa-minus" aria-hidden="true"></i>'
}  },
  {headerName: 'Qty', field: 'qty', width: 180,  },
  {headerName: '', field: 'df', width: 180, 
  cellRenderer: function(params) {
    return '<button type="button" class="btn btn-primary btn-sm mb-5">Preparing</button>'
}  }, 
 
     
 ];
 
 rowData1 = [
 { iteamname: 'Latte', addon: '' ,  qty: 'Qty' , df: 'Qty' ,},
 
 
 ];

  constructor() { }

  ngOnInit() {
  }

}
