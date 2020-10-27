import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
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
export class DashboardComponent implements OnInit {
  public start: Date = new Date ("10/07/2017"); 
  public end: Date = new Date ("11/25/2017");
  public minDate: Date = new Date ("05/07/2017");
  public maxDate: Date = new Date ("05/27/2017");
  public dateValue: Date = new Date ("05/16/2017");

  currentState = 'initial';

  public headerText: Object = [{ text: "Twitter", 'iconCss': 'e-twitter' },
  { text: "Facebook", 'iconCss': 'e-facebook' }, { text: "WhatsApp", 'iconCss': 'e-whatsapp' }];

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
  dropdownList = [];
  selectedItems = [];
   dropdownSettings:IDropdownSettings;
  columnDefs = [
    {headerName: 'Sr. No.', field: 'srNo', width: 80},
    {headerName: 'Corporate Name', field: 'CorporateName', width: 150},
    {headerName: 'UMRN', field: 'UMRN', width: 120 , cellRenderer: function(params) {
      return '<a href="javascript:void(0);">'+ params.value +'</a>';
          },
          tooltipField: "UMRN", headerTooltip: "UMRN"},
    {headerName: 'Customer Name', field: 'CustomerName', width: 200},
    {headerName: 'Reference Number', field: 'Refrence', width: 150},
    {headerName: 'Amount', field: 'Amount', width: 120},
    {headerName: 'From Date', field: 'FromDate', width: 120},
    {headerName: 'To Date', field: 'ToDate', width: 120},
    
    {headerName: 'Created On', field: 'CreatedOn', width: 120},
    {headerName: 'Record Type', field: 'RecordType', width: 120},
    {headerName: 'Status', field: 'MandateStatus', width: 100},
    {headerName: 'Reject Reason', field: 'ErrorCode', width: 120},
    

];


rowData = [
    { srNo: '1',  UMRN: '4642132', CorporateName:'RBL', CustomerName: 'Vishal', Refrence: '5464', Amount: '6456', FromDate: '04-10-2020', ToDate: '05-10-2020', DebitType: 'Demo', CreatedOn: '04-10-2020', RecordType: 'Demo', Status: 'Demo', RejectReason: 'Demo'},
    { srNo: '2',  UMRN: '23465', CorporateName:'RBL', CustomerName: 'Arun', Refrence: '654', Amount: '26465', FromDate: '02-10-2020', ToDate: '03-10-2020', DebitType: 'Demo', CreatedOn: '02-10-2020', RecordType: 'Demo', Status: 'Demo', RejectReason: 'Demo'},
    { srNo: '3',  UMRN: '3495465', CorporateName:'RBL', CustomerName: 'Rahul', Refrence: '6545', Amount: '6546', FromDate: '04-10-2020', ToDate: '05-10-2020o', DebitType: 'Demo', CreatedOn: '04-10-2020', RecordType: 'Demo', Status: 'Demo', RejectReason: 'Demo'},
    { srNo: '4',  UMRN: '3246', CorporateName:'RBL', CustomerName: 'Abhishek', Refrence: '6546', Amount: '6546', FromDate: '01-10-2020', ToDate: '02-10-2020', DebitType: 'Demo', CreatedOn: '01-10-2020', RecordType: 'Demo', Status: 'Demo', RejectReason: 'Demo'},
   
];

  constructor() { }

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
  }


