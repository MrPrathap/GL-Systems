import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arena1Component } from './arena1.component';

describe('Arena1Component', () => {
  let component: Arena1Component;
  let fixture: ComponentFixture<Arena1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arena1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Arena1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
