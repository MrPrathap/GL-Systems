import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradableComponent } from './upgradable.component';

describe('UpgradableComponent', () => {
  let component: UpgradableComponent;
  let fixture: ComponentFixture<UpgradableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
