import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arena1500CheckoutComponent } from './arena1500-checkout.component';

describe('Arena1500CheckoutComponent', () => {
  let component: Arena1500CheckoutComponent;
  let fixture: ComponentFixture<Arena1500CheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arena1500CheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Arena1500CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
