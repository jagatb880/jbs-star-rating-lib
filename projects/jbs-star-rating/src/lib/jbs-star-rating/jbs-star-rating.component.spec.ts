import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JbsStarRatingComponent } from './jbs-star-rating.component';

describe('JbsStarRatingComponent', () => {
  let component: JbsStarRatingComponent;
  let fixture: ComponentFixture<JbsStarRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JbsStarRatingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JbsStarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
