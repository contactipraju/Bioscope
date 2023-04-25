import { Component, OnInit } from '@angular/core';

import { BsModalRef }        from 'ngx-bootstrap/modal';
import * as moment           from 'moment';

import { IEvent }            from '@app/modules/media/models/media.interface';

@Component({
	selector: 'app-edit-series',
	templateUrl: './edit-series.component.html',
	styleUrls: ['./edit-series.component.scss']
})
export class EditSeriesComponent implements OnInit {
	mode: string;
	event: IEvent;
	showDeleteConfirmation: boolean = false;

	eventTypes: string[] = [
		"Holiday",
		"Time Off",
		"Doctor",
		"School Holidays",
		"Christmas Break",
		"Vacation"
	];

	constructor(
		public modalRef: BsModalRef
	) { }

	ngOnInit() {
		//console.log('EditSeriesComponent - ngOnInit: ', this.event);
	}

	saveEvent() {
		console.log('EditSeriesComponent - saveEvent: ', this.event);
		this.modalRef.hide();
	}

	deleteEvent() {
		console.log('EditSeriesComponent - deleteEvent: ', this.event);
		// this._store.dispatch(new DeleteEvent(this.event));

		this.modalRef.hide();
	}

	mom(d: any) {
		return moment(d).format("D MMM YYYY");
	}
}
