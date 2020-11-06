import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenSectionComponent } from './kitchen-section.component';

describe('KitchenSectionComponent', () => {
  let component: KitchenSectionComponent;
  let fixture: ComponentFixture<KitchenSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
