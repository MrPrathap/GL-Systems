import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookArena1Component } from './book-arena1.component';

describe('BookArena1Component', () => {
  let component: BookArena1Component;
  let fixture: ComponentFixture<BookArena1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookArena1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookArena1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
