import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanDialogComponent } from './lan-dialog.component';

describe('LanDialogComponent', () => {
  let component: LanDialogComponent;
  let fixture: ComponentFixture<LanDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
