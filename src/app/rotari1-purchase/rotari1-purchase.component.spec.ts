import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rotari1PurchaseComponent } from './rotari1-purchase.component';

describe('Rotari1PurchaseComponent', () => {
  let component: Rotari1PurchaseComponent;
  let fixture: ComponentFixture<Rotari1PurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rotari1PurchaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rotari1PurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
