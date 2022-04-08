import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsbDialogComponent } from './usb-dialog.component';

describe('UsbDialogComponent', () => {
  let component: UsbDialogComponent;
  let fixture: ComponentFixture<UsbDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsbDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsbDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
