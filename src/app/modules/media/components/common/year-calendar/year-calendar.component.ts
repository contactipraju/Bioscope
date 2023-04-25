import { Component, EventEmitter }  from '@angular/core';
import { OnInit, Input, Output }    from '@angular/core';
import { OnChanges, SimpleChange  } from '@angular/core';

import Calendar from "js-year-calendar";

import { IEvent } from '@app/modules/media/models/media.interface';

@Component({
	selector: 'app-year-calendar',
	templateUrl: './year-calendar.component.html',
	styleUrls: ['./year-calendar.component.scss']
})
export class YearCalendarComponent implements OnInit, OnChanges {
	@Input() data: IEvent[];
	@Output() emitter = new EventEmitter<object>();

	calendar: any = null;
	options: any = {};

	constructor() {
	}

	ngOnInit() {
		//console.log("YearCalendarComponent - ngOnInit: ", this.data);
		this.initializeCalendar();
	}

	ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
		console.log("YearCalendarComponent - ngOnChanges: ", changes);

		const data = changes['data'];
		if(this.calendar && data.previousValue != data.currentValue) {
			this.calendar.setDataSource(this.data);
		}
	}

	initializeCalendar() {
		//console.log("YearCalendarComponent - initializeCalendar: ", this.data);

		const emit = (from: any, to: any) => {
			this.emitter.emit({startDate: from, endDate: to});
		}

		this.options = {
			style: 'background',
			dataSource: this.data,

			enableRangeSelection: true,
			roundRangeLimits: true,

			selectRange: function(e: any) {
				emit(e.startDate, e.endDate);
			},

			clickDay: function(e: any) {
				// found clickDay as a redundant event, selectRange is fired when clicked
				// emit(e.date, e.date);
			}
		}

		this.calendar = new Calendar('#calendar', this.options);
	}
}
