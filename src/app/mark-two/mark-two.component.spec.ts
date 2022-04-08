import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkTwoComponent } from './mark-two.component';

describe('MarkTwoComponent', () => {
  let component: MarkTwoComponent;
  let fixture: ComponentFixture<MarkTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
