import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsPicturesGridComponent } from './animals-pictures-grid.component';

describe('AnimalsPicturesGridComponent', () => {
  let component: AnimalsPicturesGridComponent;
  let fixture: ComponentFixture<AnimalsPicturesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalsPicturesGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsPicturesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
