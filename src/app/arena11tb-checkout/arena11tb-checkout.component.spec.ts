import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arena11tbCheckoutComponent } from './arena11tb-checkout.component';

describe('Arena11tbCheckoutComponent', () => {
  let component: Arena11tbCheckoutComponent;
  let fixture: ComponentFixture<Arena11tbCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arena11tbCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Arena11tbCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
