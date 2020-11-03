import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineRestaurantComponent } from './define-restaurant.component';

describe('DefineRestaurantComponent', () => {
  let component: DefineRestaurantComponent;
  let fixture: ComponentFixture<DefineRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefineRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefineRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
