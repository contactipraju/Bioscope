import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewTableSeriesComponent } from './view-table-series.component';

describe('ViewTableSeriesComponent', () => {
  let component: ViewTableSeriesComponent;
  let fixture: ComponentFixture<ViewTableSeriesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTableSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTableSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
