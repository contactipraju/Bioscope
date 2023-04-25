import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEpisodeDetailsComponent } from './view-episode-details.component';

describe('ViewEpisodeDetailsComponent', () => {
  let component: ViewEpisodeDetailsComponent;
  let fixture: ComponentFixture<ViewEpisodeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEpisodeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEpisodeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
