import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlOfflineComponent } from './gl-offline.component';

describe('GlOfflineComponent', () => {
  let component: GlOfflineComponent;
  let fixture: ComponentFixture<GlOfflineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlOfflineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlOfflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
