import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacePage } from './place.page';

describe('PlacePage', () => {
  let component: PlacePage;
  let fixture: ComponentFixture<PlacePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlacePage]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
