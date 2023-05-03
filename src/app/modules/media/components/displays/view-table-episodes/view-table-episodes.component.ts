import { Component, OnInit, Input }   from '@angular/core';
import { OnChanges, SimpleChange  }   from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ITable }   from '@app/modules/core/models/table.interface';
import { IEvent }   from '@app/modules/media/models/media.interface';
import { IEpisode } from '@app/modules/media/models/media.interface';

import { EditEpisodeComponent } from '@app/modules/media/components/edit/edit-episode/edit-episode.component';

@Component({
	selector: 'media-view-table-episodes',
	templateUrl: './view-table-episodes.component.html',
	styleUrls: ['./view-table-episodes.component.scss']
})
export class ViewTableEpisodesComponent implements OnInit, OnChanges {
	@Input() data: IEvent[];
	@Input() page: string;

	modalRef_EditEpisode: BsModalRef;

	table: ITable = {
		header: "Episodes",
		columnTitles: ["Series name", "Episode", "Description", "Date", "Speakers"],
		props: ["seriesName", "name", "description", "startDateFormatted", "speakers"],
		data: []
	};

	constructor(private modalService: BsModalService) {
	}

	ngOnInit() {
		//console.log("ViewTableEpisodesComponent - ngOnInit: ", this.data);
	}

	ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
		console.log("ViewTableEpisodesComponent - ngOnChanges: ", changes);

		const data = changes['data'];
		if(data.previousValue != data.currentValue && data.currentValue.length) {
			this.prepEpisodes(data.currentValue);
		}
	}

	// Instead, accept filtered episodes from parent (so search can look into speakers)
	prepEpisodes(values: any) { // TODO: add better type
		let episodes: IEpisode[] = [];

		for(let i=0; i<values.length; i++) {
			for(let j=0; j<values[i].episodes.length; j++) {
				values[i].episodes[j]['seriesId'] = values[i]['id'];
				values[i].episodes[j]['seriesName'] = values[i]['name'];
				values[i].episodes[j]['category'] = values[i]['category'];
				values[i].episodes[j]['subcategory'] = values[i]['subcategory'];
				episodes.push(values[i].episodes[j]);
			}
		}
		this.sortEpisodes(episodes);
	}

	addEpisode(e: any) {
		const initialState = {
			mode: "add",
			episodesList: this.data,
			event: {}
		};

		this.modalRef_EditEpisode = this.modalService.show(EditEpisodeComponent, { initialState });
		this.modalRef_EditEpisode.content.modalRef = this.modalRef_EditEpisode;
	}

	selectEpisode(e: any) {
		const initialState = {
			mode: "edit",
			episodesList: this.data,
			event: e
		};

		this.modalRef_EditEpisode = this.modalService.show(EditEpisodeComponent, { initialState });
		this.modalRef_EditEpisode.content.modalRef = this.modalRef_EditEpisode;
	}

	sortEpisodes(episodes: IEpisode[]) {
		episodes.sort((a,b) => {
			return a.startDate!.getTime() - b.startDate!.getTime();
		});

		this.table.data = [];
		for (let i=0; i<episodes.length; i++) {
			this.table.data.push(episodes[i]);
		}
	}
}
