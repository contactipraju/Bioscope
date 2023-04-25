import { Component, OnInit, Input }   from '@angular/core';
import { OnChanges, SimpleChange  }   from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { IEpisode, ISeries }     from '@app/modules/media/models/media.interface';

import { RouteService }          from '@app/modules/core/services/route.service';

import { WatchEpisodeComponent } from '@app/modules/media/components/common/watch-episode/watch-episode.component';

@Component({
	selector: 'app-tile-episode',
	templateUrl: './tile-episode.component.html',
	styleUrls: ['./tile-episode.component.scss']
})
export class TileEpisodeComponent implements OnInit, OnChanges {
	@Input() episode: IEpisode;
	@Input() series: ISeries;

	modalRef_WatchEpisode: BsModalRef;

	public speakers: { label: string }[] = [];
	public thumbnail = '';
	public options: any = {};

	constructor(
		private modalService: BsModalService,
		private route: RouteService
	) { }

	ngOnInit() {
		// console.log("TileEpisodeComponent - ngOnInit: ", this.episode);

		this.readParams();
		this.prepThumbnail();
		this.prepSpeakers();
	}

	readParams() {
		this.options = this.route.getParams();
	}

	prepThumbnail() {
		const sourceToFlyers = 'assets/images/flyers/';
		this.thumbnail = sourceToFlyers + this.series.subcategory + '/' + this.series.images + '/' + (this.episode.flyer ? this.episode.flyer : this.series.flyer);
	}

	prepSpeakers() {
		let source = this.episode.speakers ? this.episode.speakers : this.series.speakers!;

		for (let i = 0; i < source.length; i++) {
			this.speakers.push({ label: source[i] });
		}
	}

	ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
		// console.log("TileEpisodeComponent - ngOnChanges: ", changes);
	}

	onImage(event: any) {
		console.log("TileEpisodeComponent - onImage: ", this.episode, this.series);

		if (this.episode.ytKey) {
			const initialState = {
				episode: this.episode,
				series: this.series
			};

			this.modalRef_WatchEpisode = this.modalService.show(WatchEpisodeComponent, { initialState });
			this.modalRef_WatchEpisode.content.modalRef = this.modalRef_WatchEpisode;
		}
	}

	onImgError(event: any) {
		if (this.isInPast()) {
			event.target.src = 'assets/images/error/media/missing.jpeg';
		}
		else {
			event.target.src = 'assets/images/error/media/coming-soon.jpg';
		}
	}

	isInPast() {
		if (this.episode.endDate!.valueOf() < Date.now()) {
			return true;
		}
		else
		{
			return false;
		}
	}
}
