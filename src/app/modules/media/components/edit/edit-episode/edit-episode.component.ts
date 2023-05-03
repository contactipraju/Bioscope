import { Component, OnInit } from '@angular/core';
import { BsModalRef }        from 'ngx-bootstrap/modal';

import * as moment           from 'moment';

import { IEvent }            from '@app/modules/media/models/media.interface';

@Component({
	selector: 'app-edit-episode',
	templateUrl: './edit-episode.component.html',
	styleUrls: ['./edit-episode.component.scss']
})
export class EditEpisodeComponent implements OnInit {
	mode: string;
	event: IEvent;
	seriesList?: IEvent[];

	showDeleteConfirmation: boolean = false;

	constructor(
		public modalRef: BsModalRef
	) { }

	ngOnInit() {
		//console.log('EditEpisodeComponent - ngOnInit: ', this.event);
	}

	saveEvent() {
		console.log('EditEpisodeComponent - saveEvent: ', this.event);

		//if present.. startDateInputFormat and endDateInputFormat have the modified dates

		//Notifications.showSuccessNotification(this.mode === 'create'? "Event created successfully" : "Event updated successfully");
		//Notifications.showErrorNotification(this.mode === 'create'? "Event created failed" : "Event update failed");

		this.modalRef.hide();
	}

	deleteEvent() {
		console.log('EditEpisodeComponent - deleteEvent: ', this.event);

		//Notifications.showSuccessNotification("Event deleted successfully");
		//Notifications.showErrorNotification("Event deletion failed");

		this.modalRef.hide();
	}

	mom(d: any) {
		return moment(d).format("D MMM YYYY");
	}
}
