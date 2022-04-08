import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiDialogComponent } from './wifi-dialog.component';

describe('WifiDialogComponent', () => {
  let component: WifiDialogComponent;
  let fixture: ComponentFixture<WifiDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WifiDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WifiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
