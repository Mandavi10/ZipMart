import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenScreenComponent } from './kitchen-screen.component';

describe('KitchenScreenComponent', () => {
  let component: KitchenScreenComponent;
  let fixture: ComponentFixture<KitchenScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
