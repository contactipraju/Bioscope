import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMediaComponent } from './filter-media.component';

describe('FilterMediaComponent', () => {
	let component: FilterMediaComponent;
	let fixture: ComponentFixture<FilterMediaComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ FilterMediaComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FilterMediaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
