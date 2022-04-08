import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluetoothDialogComponent } from './bluetooth-dialog.component';

describe('BluetoothDialogComponent', () => {
  let component: BluetoothDialogComponent;
  let fixture: ComponentFixture<BluetoothDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BluetoothDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BluetoothDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
