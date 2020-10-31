import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosSidebarComponent } from './pos-sidebar.component';

describe('PosSidebarComponent', () => {
  let component: PosSidebarComponent;
  let fixture: ComponentFixture<PosSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
