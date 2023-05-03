import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewTileSeriesComponent } from './view-tile-series.component';

describe('ViewTileSeriesComponent', () => {
  let component: ViewTileSeriesComponent;
  let fixture: ComponentFixture<ViewTileSeriesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTileSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTileSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
