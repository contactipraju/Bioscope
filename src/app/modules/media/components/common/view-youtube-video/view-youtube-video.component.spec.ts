import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewYoutubeVideoComponent } from './view-youtube-video.component';

describe('ViewYoutubeVideoComponent', () => {
  let component: ViewYoutubeVideoComponent;
  let fixture: ComponentFixture<ViewYoutubeVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewYoutubeVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewYoutubeVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
