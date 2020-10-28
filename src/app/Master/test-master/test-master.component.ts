import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-test-master',
  templateUrl: './test-master.component.html',
  styleUrls: ['./test-master.component.css'],
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
export class TestMasterComponent implements OnInit {
  currentState = 'initial';

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
  }
  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
}
