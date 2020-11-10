import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLoyaltyComponent } from './customer-loyalty.component';

describe('CustomerLoyaltyComponent', () => {
  let component: CustomerLoyaltyComponent;
  let fixture: ComponentFixture<CustomerLoyaltyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerLoyaltyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerLoyaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
