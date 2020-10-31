import { Component, OnInit } from '@angular/core';
import { ListBoxComponent } from '@syncfusion/ej2-angular-dropdowns';
@Component({
  selector: 'app-section-table',
  templateUrl: './section-table.component.html',
  styleUrls: ['./section-table.component.css']
})
export class SectionTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public groupA: { [key: string]: Object }[] = [
    { "Name": "T1", "Code": "AU" },
    { "Name": "T2", "Code": "BM" },
    { "Name": "T3", "Code": "CA" },
    { "Name": "T4", "Code": "CM" },
    { "Name": "T5", "Code": "DK" },
    { "Name": "T6", "Code": "FR" },
    { "Name": "T7", "Code": "FI" },
    { "Name": "T8", "Code": "DE" },
    { "Name": "T9", "Code": "HK" }
];

public groupB: { [key: string]: Object }[] = [
    { "Name": "T10", "Code": "IN" },
    { "Name": "T11", "Code": "IT" },
    { "Name": "T12", "Code": "JP" },
    { "Name": "T13", "Code": "MX" },
    { "Name": "T14", "Code": "NO" },
    { "Name": "T15", "Code": "PL" },
    { "Name": "T16", "Code": "CH" },
    { "Name": "T17", "Code": "GB" },
    { "Name": "T18", "Code": "US" }
];
public setfield = {
  text: "Name"
}
public toolbar = {
    items: [, 'moveTo', 'moveFrom', 'moveAllTo', 'moveAllFrom'],
    //'moveUp', 'moveDown'
  }
 

}
