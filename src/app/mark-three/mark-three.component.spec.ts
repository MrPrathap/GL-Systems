import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkThreeComponent } from './mark-three.component';

describe('MarkThreeComponent', () => {
  let component: MarkThreeComponent;
  let fixture: ComponentFixture<MarkThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
