import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgbDialogComponent } from './rgb-dialog.component';

describe('RgbDialogComponent', () => {
  let component: RgbDialogComponent;
  let fixture: ComponentFixture<RgbDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgbDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RgbDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
