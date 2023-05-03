import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewTableEpisodesComponent } from './view-table-episodes.component';

describe('ViewTableEpisodesComponent', () => {
  let component: ViewTableEpisodesComponent;
  let fixture: ComponentFixture<ViewTableEpisodesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTableEpisodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTableEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
