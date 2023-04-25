import { Component, OnInit, Input }   from '@angular/core';
import { OnChanges, SimpleChange  }   from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { IEvent }                     from '@app/modules/media/models/media.interface';

import { EditEpisodeComponent}        from '@app/modules/media/components/edit/edit-episode/edit-episode.component';
import { MultiselectListComponent }   from '@app/modules/media/components/common/multiselect-list/multiselect-list.component';

@Component({
	selector: 'media-view-calendar',
	templateUrl: './view-calendar.component.html',
	styleUrls: ['./view-calendar.component.scss']
})
export class ViewCalendarComponent implements OnInit, OnChanges {
	@Input() events: IEvent[];

	selectedEvents: IEvent[];
	episodes: IEvent[];

	modalRef_Multiselect: BsModalRef;
	modalRef_EditEvent: BsModalRef;

	constructor(private modalService: BsModalService) { }

	ngOnInit() {
		//console.log("ViewCalendarComponent - ngOnInit: ", this.events);
	}

	ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
		console.log("ViewCalendarComponent - ngOnChanges: ", changes);

		const events = changes['events'];
		if(events.previousValue != events.currentValue && events.currentValue.length) {
			this.episodes = [];

			for(var i = 0; i < events.currentValue.length; i++) {
				for(var j = 0; j < events.currentValue[i].episodes.length; j++) {
					this.episodes.push(events.currentValue[i].episodes[j]);
				}
			}
		}
	}

	datesSelected($event: any) {
		this.findEventToShow($event);
	}

	findEventToShow(e: any) {
		const events: IEvent[] = this.episodes.filter(episode => episode.startDate! <= e.endDate && episode.endDate! >= e.startDate);

		if (events.length > 1) {
			this.selectedEvents = [];

			for (let i=0; i<events.length; i++) {
				this.selectedEvents.push(events[i]);
			}

			this.viewMultiSelect(this.selectedEvents);
		}
		else if(events.length == 1) {
			this.editEvent(events[0]);
		}
		else {
			this.createEvent(e);
		}
	}

	viewMultiSelect(events: IEvent[]) {
		console.log("ViewCalendarComponent - viewMultiSelect: ", events);

		const initialState = {
			list: events
		};

		this.modalRef_Multiselect = this.modalService.show(MultiselectListComponent, { initialState });
		this.modalRef_Multiselect.content.modalRef = this.modalRef_Multiselect;
	}

	createEvent(e: any) {
		console.log("ViewCalendarComponent - createEvent: ", e);

		const initialState = {
			mode: "create",
			event: {
				startDate: e.startDate,
				endDate: e.endDate
			}
		};

		this.modalRef_EditEvent = this.modalService.show(EditEpisodeComponent, { initialState });
		this.modalRef_EditEvent.content.modalRef = this.modalRef_EditEvent;
	}

	editEvent(e: any) {
		console.log("ViewCalendarComponent - editEvent: ", e);

		const initialState = {
			mode: "edit",
			seriesList: this.events,
			event: e
		};

		this.modalRef_EditEvent = this.modalService.show(EditEpisodeComponent, { initialState });
		this.modalRef_EditEvent.content.modalRef = this.modalRef_EditEvent;
	}
}
