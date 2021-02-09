import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectedbookComponent } from './collectedbook.component';

describe('CollectedbookComponent', () => {
  let component: CollectedbookComponent;
  let fixture: ComponentFixture<CollectedbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectedbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectedbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
